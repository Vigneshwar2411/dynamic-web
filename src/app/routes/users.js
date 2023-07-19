const usersRouter = require('express').Router();
const { Users } = require('../models/userModel');

usersRouter.route('/details')
  .get(async(req,res) => {
    try {
      let userName;
      const { session: { passport }} = req;
      if (passport && Object.keys(passport.user).length > 1 && passport.user.emails[0].verified) {
        userName = passport.user.emails[0].value;
      }

      const userRecords = await Users.find({ userName: userName }).exec();
      if (userRecords) {
        res.status(200).json({userRecords: userRecords[0]});
      } else {
        res.status(404).json({error: 'No Users found'});
      }

    } catch (err) {
      console.error('Error getting Users');
      return res.status(500).json({error: `Error getting users with ${err}`});
    }
  });

usersRouter.route('/updateDetails/:patientId')
  .put(async(req,res) => {
    try {
      const body = req.body.data;
      const {
        name,
        contactNumber,
        age,
        gender,
        bloodGroup,
        dob,
        addressLine1,
        addressLine2,
        city,state,
        country,
        pincode,
      } = body;
      const patientId = req.params.patientId;
      const { session: { passport }} = req;
      if (passport && Object.keys(passport.user).length > 1 && passport.user.emails[0].verified) {
        const updatedRecord = await Users.findOneAndUpdate({ patientId: parseInt(patientId)}, {
          name: name,
          contactNumber: contactNumber,
          age: parseInt(age),
          gender: gender,
          bloodGroup: bloodGroup,
          dob: dob,
          addressLine1: addressLine1,
          addressLine2: addressLine2,
          city: city,
          state: state,
          country: country,
          pincode: pincode,
        });
        return res.status(200).json({ updatedRecord: updatedRecord });
      } else {
        return res.status(403);
      }
    } catch (err) {
      console.error('Updating patient details failed');
      return res.status(500).json({error: `Updating patient details failed with ${err}`});
    }
  });

usersRouter.route('/makeAdmin')
  .put(async(req,res) => {
    try {
      const body = req.body;
      const updatedRecord = await Users.findOneAndUpdate({ userName: body.adminEmail}, {
        admin: true
      });
      return res.status(200).json({ updatedRecord: updatedRecord });
    } catch (err) {
      console.error('Adding admin failed', err);
      return res.status(500).json({error: `Adding admin failed with ${err}`});
    }
  });

module.exports = usersRouter;
