import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { getUserAppointments } from 'client/javascripts/api/appointment';
import MyAppointments from 'client/javascripts/components/Appointment/MyAppointments.js';

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

const UserAppointmentModal = ({ showAppointmentModal, patientId, setAppointmentModal }) => {
  const [userAppointments, setUserAppointments] = React.useState([]);
  const handleClose = () => setAppointmentModal({ showAppointmentModal: false });

  React.useEffect(() => {
    getUserAppointments(patientId).then((data) => {
      setUserAppointments(data);
    }).catch(err => console.log('Error getting user appointments', err));
  }, []);

  return (
    <div>
      <Modal
        open={showAppointmentModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: 'scroll',
        }}
      >
        <Box sx={style}>
          <CloseIcon onClick={handleClose} sx={{ float: 'right', cursor: 'pointer' }} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Appointments
          </Typography>
          {userAppointments && userAppointments.length > 0
            && (
              <div id="my_appointments">
                <MyAppointments appointments={userAppointments} />
              </div>
            )
          }
        </Box>
      </Modal>
    </div>
  );
};

export default UserAppointmentModal;
