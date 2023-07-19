const { mongoose } = require('../db/index');

const appointmentSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    contactNumber: {type: String, required: true},
    bookingDate: {type: String, required: true},
    department: {type: String, required: true},
    message: {type: String},
    userName: {type: String, required: true},
    patientId: {type: String, required: true}
  });

const Appointments = mongoose.model('appointments', appointmentSchema);

module.exports = {
  Appointments: Appointments
};
