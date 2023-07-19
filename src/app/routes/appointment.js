const appointmentRouter = require('express').Router();
const { Appointments } = require('../models/appointmentModel');


appointmentRouter.route('/book')
  .post(async(req,res) => {
    try {
      let body = req.body;
      const { session: { passport }} = req;
      if (passport && Object.keys(passport.user).length > 1 && passport.user.emails[0].verified) {
        body = { ...body.data, userName:  passport.user.emails[0].value };
      }
      const appointmentRecord = new Appointments(body);
      const savedRecord = await appointmentRecord.save();
      return res.status(200).json({data: savedRecord});
    } catch (err) {
      console.error('Saving Appointment Data failed');
      return res.status(500).json({error: `Saving Appointment Data failed with ${err}`});
    }
  });

appointmentRouter.route('/cancel')
  .post(async(req,res) => {
    try {
      const body = req.body;
      const { session: { passport }} = req;
      if (passport && Object.keys(passport.user).length > 1 && passport.user.emails[0].verified) {
        const userName = passport.user.emails[0].value;
        const deletedAppointment = await Appointments.deleteOne({ _id: body.data }).exec();
        console.log(`Appointment with ID ${body.data} deleted - ${deletedAppointment}`);
        const appointmentRecords = await Appointments.find({ userName: userName }).exec();
        return res.status(200).json({ appointmentRecords: appointmentRecords });
      } else {
        return res.status(403);
      }
    } catch (err) {
      console.error('Cancelling Appointment failed');
      return res.status(500).json({error: `Cancelling Appointment Data failed with ${err}`});
    }
  });


appointmentRouter.route('/appointments')
  .get(async(req,res) => {
    try {
      let userName;
      const { session: { passport }} = req;
      if (passport && Object.keys(passport.user).length > 1 && passport.user.emails[0].verified) {
        userName = passport.user.emails[0].value;
      }

      const appointmentRecords = await Appointments.find({ userName: userName }).exec();
      if (appointmentRecords) {
        res.status(200).json({appointmentRecords: appointmentRecords});
      } else {
        res.status(404).json({error: 'Not Appointments found'});
      }

    } catch (err) {
      console.error('Error getting Appointments');
      return res.status(500).json({error: `Error getting Appointments with ${err}`});
    }
  });

appointmentRouter.route('/appointments/:patientId')
  .get(async(req,res) => {
    try {
      const { patientId } = req.params;
      const appointmentRecords = await Appointments.find({ patientId: patientId }).exec();
      if (appointmentRecords) {
        res.status(200).json({appointmentRecords: appointmentRecords});
      } else {
        res.status(404).json({error: 'Not Appointments found'});
      }

    } catch (err) {
      console.error('Error getting Appointments');
      return res.status(500).json({error: `Error getting Appointments with ${err}`});
    }
  });

module.exports = appointmentRouter;
