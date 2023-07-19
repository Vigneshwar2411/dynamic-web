import React from 'react';
import './Appointment.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import { CsrfContext, UserContext } from 'client/javascripts/utils/ContextProviders';
import Toast from 'client/javascripts/components/Toast/index';
import { getAppointments } from 'client/javascripts/api/appointment';
import MyAppointments from 'client/javascripts/components/Appointment/MyAppointments.js';

const AppointmentJs = () => {
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    toast,
    handleDepartmentChange,
    department,
    setMyAppointments,
    myAppointments,
  } = useAppointmentForm();
  const csrf = React.useContext(CsrfContext);
  const { userDetail: { patientId } } = React.useContext(UserContext);

  React.useEffect(() => {
    getAppointments().then((data) => {
      setMyAppointments(data);
    }).catch(err => console.log('Error getting appointments', err));
  }, []);

  const requiredFieldsChecked = () => {
    const requiredFields = ['name', 'email', 'bookingDate', 'contactNumber', 'department'];
    let userInputs = { ...inputs };
    if (department.department !== 0) {
      userInputs = { ...userInputs, ...department };
    }
    const fieldsTouched = Object.keys(userInputs);
    return requiredFields.every(f => fieldsTouched.includes(f));
  };

  return (
    <div id="appointment_main_container">
      {
        toast.showToast && <Toast message={toast.toastMsg} />
      }
      <div className="appointment_background_shape">
        <img src="asc/images/contact-shape1.svg" alt="shape" />
      </div>
      <div id="appointment">
        <h3> Make an Appointment </h3>

        <div className="appointment_container">
          <div className="appointment_form">
            <form>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  name="name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={inputs.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={inputs.email}
                  type="email"
                  onChange={handleInputChange}
                />
              </Stack>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
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
                  value={inputs.contactNumber}
                  inputProps={{ maxLength: 10 }}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  required
                  id="outlined-basic"
                  label="Booking Date"
                  variant="outlined"
                  name="bookingDate"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={inputs.bookingDate}
                  onChange={handleInputChange}
                />
              </Stack>
              <div className="appointment_select_fields">
                <FormControl fullWidth>
                  <InputLabel id="department" required>Department</InputLabel>
                  <Select
                    labelId="department"
                    id="demo-simple-select-helper"
                    value={department.department}
                    label="Department"
                    required
                    name="department"
                    onChange={handleDepartmentChange}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Cardiology</MenuItem>
                    <MenuItem value={20}>Radiology</MenuItem>
                    <MenuItem value={30}>Ortho</MenuItem>
                    <MenuItem value={40}>General Medicine</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Message"
                  multiline
                  variant="outlined"
                  rows={4}
                  name="message"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={inputs.message}
                  onChange={handleInputChange}
                />
              </Stack>


              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'firebrick',
                }}
                disabled={!requiredFieldsChecked()}
                onClick={() => handleSubmit(csrf, patientId)}
              >
                Book Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>

      {myAppointments && myAppointments.length > 0
        && (
        <div id="my_appointments">
          <h3> My Appointments </h3>
          <MyAppointments appointments={myAppointments} />
        </div>
        )
      }

    </div>
  );
};
export default AppointmentJs;
