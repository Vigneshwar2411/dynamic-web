const loginRouter = require('express').Router();
const auth = require('../middleware/authenticator');
const config = require('../config');
const { Users } = require('../models/userModel');

loginRouter.get('/', auth.authenticate('google', {
  scope : ['profile', 'email'] }));

loginRouter.get('/callback',
  auth.authenticate('google', { failureRedirect: '/error' }), async(req, res) => {
    try {
      const { session: { passport: { user: { _json } } } } = req;
      const noOfUsers = await Users.countDocuments();
      const userInDb = await Users.find({ userName: _json.email });
      if ( !_json['email_verified']) {
        return res.status(500).json({error: 'Error Saving user data - Email not verified'});
      }
      if ( _json['email_verified'] && userInDb && userInDb.length === 0) {
        const isAdminUser = config.adminUsers.split(',').filter(u => u === _json.email).length > 0;
        req.session.isAdmin = isAdminUser;
        const savedUserRecord = new Users({
          name: _json['given_name'],
          email: _json.email,
          userName: _json.email,
          patientId: 1000 + noOfUsers,
          contactNumber: '9999999999',
          age: '',
          gender: '',
          admin: isAdminUser
        });
        await savedUserRecord.save();
      }
      res.redirect(`${config.clientBaseURL}/asc/dashboard`);
    } catch (err) {
      console.error(`Error when Signing In ${err}`);
      return res.status(500).json({error: `Error when Signing In ${err}`});
    }
  });

loginRouter.get('/logout', async (req,res) => {
  await req.session.destroy();
  return res.redirect(`${config.clientBaseURL}/asc/dashboard`);
});

module.exports = loginRouter;
