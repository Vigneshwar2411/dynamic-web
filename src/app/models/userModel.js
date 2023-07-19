const { mongoose } = require('../db/index');
const report = require('./reportModel');

const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    contactNumber: {type: String, required: true},
    userName: {type: String, required: true},
    patientId: {type: Number, required: true},
    age: {type: Number},
    gender: {type: String},
    bloodGroup: {type: String},
    dob: {type: String},
    addressLine1: {type: String},
    addressLine2: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    pincode: {type: String},
    admin: {type: Boolean},
    reports: {type: [report]},
  });

const Users = mongoose.model('users', userSchema);

module.exports = {
  Users: Users
};
