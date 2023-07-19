import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Chip from '@mui/material/Chip';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import { buildFormData } from 'client/javascripts/utils/build-form-data';
import { CsrfContext } from 'client/javascripts/utils/ContextProviders';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import Toast from 'client/javascripts/components/Toast';

const axios = require('axios');

const UploadPatientReportModal = ({ uploadReportDetails, setUploadReportDetails }) => {
  const [reports, setReports] = React.useState([]);
  const csrf = React.useContext(CsrfContext);
  const {
    toast,
    setToast,
  } = useAppointmentForm();
  const onDrop = (acceptedFiles) => {
    // Do something with the files
    const addedReports = reports.concat(acceptedFiles);
    setReports(addedReports);
  };

  // eslint-disable-next-line react/prop-types
  const { showUploadModal, patientDetail } = uploadReportDetails;
  const {
    getRootProps, getInputProps, isDragActive,
  } = useDropzone({
    onDrop,
    maxFiles: 5,
    accept: {
      pdf: ['.pdf'],
    },
  });

  const handleClose = () => {
    setUploadReportDetails({
      showUploadModal: false,
      patientDetail: {},
    });
  };

  const uploadReport = () => {
    const data = {
      reports,
      patientId: patientDetail.patientId,
      noOfReports: reports.length,
    };
    const formData = buildFormData(data, 'reports');
    axios({
      url: `/asc/patients/uploadReports/${patientDetail.patientId}`,
      method: 'POST',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data', 'X-XSRF-TOKEN': csrf },
    }).then(() => {
      setToast({ showToast: true, toastMsg: 'Reports uploaded Successfully' });
      setTimeout(() => window.location.reload(), 5000);
    }).catch((err) => {
      setToast({ showToast: true, toastMsg: `Reports uploading failed with error ${err}` });
    });
  };

  const acceptedFileItems = reports.map(file => (
    <li key={file.path}>
      <Chip
        label={file.path}
        onDelete={() => setReports(reports.filter(r => r.path !== file.path))}
        sx={{
          margin: '0.5rem',
        }}
      />
    </li>
  ));

  return (
    <div>
      {
        toast.showToast && <Toast message={toast.toastMsg} />
      }
      <Dialog
        open={showUploadModal}
        onClose={handleClose}
      >
        <DialogTitle>Upload Report</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Patient Id is ${patientDetail.patientId} and Patient Name ${patientDetail.name}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
          border: '2px solid #efefef',
          padding: '0.5rem',
          margin: '1rem',
        }}
        >
          <form acceptCharset="UTF-8" method="POST">
            <div {...getRootProps()}>
              <input {...getInputProps()} name="reports" />
              {
                isDragActive
                  ? <p>Drop the files here ...</p>
                  : <p>Drag and drop some files here, or click to select files</p>
              }
            </div>
          </form>

        </DialogActions>
        {reports && reports.length > 0 && (
          <div style={{
            margin: '1rem',
          }}
          >
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'firebrick',
              }}
              onClick={uploadReport}
              disabled={!(reports.length >= 1)}
            >
              Upload
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default UploadPatientReportModal;
