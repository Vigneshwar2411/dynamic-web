import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { CsrfContext } from 'client/javascripts/utils/ContextProviders';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import Toast from 'client/javascripts/components/Toast';
import TextField from '@mui/material/TextField';

const axios = require('axios');

const UploadPatientReportModal = ({ addAdminDetails, setAddAdmin }) => {
  const [adminEmail, setAdminEmail] = React.useState([]);
  const csrf = React.useContext(CsrfContext);
  const {
    toast,
    setToast,
  } = useAppointmentForm();

  // eslint-disable-next-line react/prop-types
  const { showAddAdminModal } = addAdminDetails;

  const handleClose = () => {
    setAddAdmin({
      showAddAdminModal: false,
    });
  };

  const addAdmin = () => {
    const data = {
      adminEmail,
    };
    axios({
      url: '/asc/users/makeAdmin',
      method: 'PUT',
      data,
      headers: { 'X-XSRF-TOKEN': csrf },
    }).then(() => {
      setToast({ showToast: true, toastMsg: 'Admin added Successfully' });
      setTimeout(() => window.location.reload(), 5000);
    }).catch((err) => {
      setToast({ showToast: true, toastMsg: `Adding Admin failed with error ${err}` });
    });
  };

  return (
    <div>
      {
        toast.showToast && <Toast message={toast.toastMsg} />
      }
      <Dialog
        open={showAddAdminModal}
        onClose={handleClose}
      >
        <DialogTitle>Add Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the email id of the user to add him as an Admin.
            The user is supposed to have signed in into the App atleast once before being added as an Admin.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
          justifyContent: 'flex-start',
          padding: '1.5rem',
        }}
        >
          <form acceptCharset="UTF-8" method="POST">
            <TextField
              fullWidth
              required
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              name="adminEmail"
              type="email"
              InputLabelProps={{
                shrink: true,
              }}
              value={adminEmail}
              onChange={e => setAdminEmail(e.target.value)}
              sx={{
                marginBottom: '1rem',
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'firebrick',
              }}
              onClick={addAdmin}
              disabled={!(adminEmail.includes('@'))}
            >
              Save
            </Button>
          </form>

        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UploadPatientReportModal;
