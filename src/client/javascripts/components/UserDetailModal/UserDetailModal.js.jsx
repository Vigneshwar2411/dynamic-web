import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import { CsrfContext } from 'client/javascripts/utils/ContextProviders';
import Chip from '@mui/material/Chip';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #EFEFEF',
  boxShadow: 24,
  p: 4,
};

const UserDetailModal = ({
  userModalData: {
    showUserModal,
    userDetail,
    editDetails,
  },
  setShowUserModal,
  setUserDetailInContext,
}) => {
  const {
    handlePatientDetailsInputChange,
    patientDetailsForm,
    handlePatientDetailsSubmit,
    setPatientDetailsForm,
  } = useAppointmentForm();
  const csrf = React.useContext(CsrfContext);
  const handleClose = () => setShowUserModal(false);

  React.useEffect(() => {
    setPatientDetailsForm(userDetail);
  }, []);

  return (
    <div>
      <Modal
        open={showUserModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: 'scroll'
        }}
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} sx={{ float: 'right', cursor: 'pointer' }} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Details
          </Typography>
          <form>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem', marginTop: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.name}
                inputProps={{ maxLength: 10 }}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                InputLabelProps={{
                  shrink: true,
                }}
                value={patientDetailsForm.email}
                disabled
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Contact Number"
                variant="outlined"
                name="contactNumber"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.contactNumber}
                inputProps={{ maxLength: 10 }}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Age"
                variant="outlined"
                name="age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={patientDetailsForm.age}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                name="gender"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.gender}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Blood Group"
                variant="outlined"
                name="bloodGroup"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                value={patientDetailsForm.bloodGroup}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Date of Birth"
                variant="outlined"
                name="dob"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.dob}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Address Line 1"
                variant="outlined"
                name="addressLine1"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                value={patientDetailsForm.addressLine1}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Address Line 2"
                variant="outlined"
                name="addressLine2"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.addressLine2}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="City"
                variant="outlined"
                name="city"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                value={patientDetailsForm.city}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="State"
                variant="outlined"
                name="state"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.state}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Country"
                variant="outlined"
                name="country"
                type="string"
                InputLabelProps={{
                  shrink: true,
                }}
                value={patientDetailsForm.country}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: '1rem' }}
            >
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Pincode"
                variant="outlined"
                name="pincode"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.pincode}
                disabled={!editDetails}
                onChange={handlePatientDetailsInputChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-basic"
                label="Patient Id"
                variant="outlined"
                name="patientId"
                InputLabelProps={{
                  shrink: true,
                }}
                type="tel"
                value={patientDetailsForm.patientId}
                disabled
              />
            </Stack>

            {
              patientDetailsForm.reports && patientDetailsForm.reports.length > 0
              && (
                <div id="reports">
                  <h3>Uploaded Reports</h3>
                  {
                    patientDetailsForm.reports.map(r => (
                      <Chip
                        label={r.attachmentName}
                        sx={{
                          margin: '0.5rem',
                          cursor: 'Pointer',
                        }}
                        component="a"
                        href={r.attachmentUrl}
                        target="_blank"
                      />
                    ))
                  }
                </div>
              )
            }

            { editDetails && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'firebrick',
                }}
                onClick={() => handlePatientDetailsSubmit(csrf, setUserDetailInContext)}
              >
                Save
              </Button>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserDetailModal;
