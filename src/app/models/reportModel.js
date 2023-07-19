const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema(
  {
    attachementsId: {type: String, required: true},
    attachmentName: {type: String, required: true},
    attachmentUrl: {type: String, required: true},
    attachementSize: {type: String, required: true}
  });

const Report = mongoose.model('Report', reportSchema);
module.exports = reportSchema;
