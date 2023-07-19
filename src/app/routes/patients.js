const patientsRouter = require('express').Router();
const { Users } = require('../models/userModel');
const { uploadAttachment, downloadAttacment } = require('../utils/upload-attachments');
const multiparty = require('multiparty');


patientsRouter.route('/getAll')
  .get(async(req,res) => {
    try {
      const patientRecords = await Users.find({ admin: false }).exec();
      if (patientRecords) {
        res.status(200).json({patientRecords: patientRecords});
      } else {
        res.status(404).json({error: 'No Patients found'});
      }

    } catch (err) {
      console.error('Error getting Patients');
      return res.status(500).json({error: `Error getting patients with ${err}`});
    }
  });

patientsRouter.route('/report/:file_id?')
  .get(async (req, res) => {
    try {
      const file = downloadAttacment(req, res);
      return file;
    } catch (error) {
      res.status(500).json({error: error});
    }
  });

patientsRouter.route('/uploadReports/:patientId')
  .post(async(req,res) => {
    try {
      const reports = [];
      const { patientId } = req.params;
      var form = new multiparty.Form();
      form.on('part', async function (part) {
        if (!part.filename) return;
        try {
          const report = Promise.resolve(uploadAttachment(part));
          reports.push(await report);
          await Users.findOneAndUpdate({ patientId: parseInt(patientId)}, {
            $push: {
              reports: reports
            }
          });
          return res.status(200).json({data: 'ok'});
        } catch (err) {
          console.error('Updating reports for Patient failed with with err', err);
          return res.status(500).json({error: `Updating reports for Patient failed with ${err}`});
        }

      });
      form.parse(req);
    } catch (err) {
      console.error('Error uploading Patient reports', err);
      return res.status(500).json({error: `Error uploading Patient reports with ${err}`});
    }
  });

module.exports = patientsRouter;
