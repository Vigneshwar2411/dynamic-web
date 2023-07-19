import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { CsrfContext } from 'client/javascripts/utils/ContextProviders';


const departments = {
  10: 'Cardiology',
  20: 'Radiology',
  30: 'Ortho',
  40: 'General Medicine',
};

export default function MyAppointments({ appointments, page = 'homePage', cancelAppt = () => {} }) {
  const csrf = React.useContext(CsrfContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Booking Date</TableCell>
            <TableCell align="right">Contact</TableCell>
            { page === 'profilePage' && <TableCell align="right">Cancel</TableCell> }
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map(appointment => (
            <TableRow
              key={appointment.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.name}
              </TableCell>
              <TableCell align="right">{appointment.email}</TableCell>
              <TableCell align="right">{departments[appointment.department]}</TableCell>
              <TableCell align="right">{appointment.bookingDate}</TableCell>
              <TableCell align="right">{appointment.contactNumber}</TableCell>
              { page === 'profilePage' && (
              <TableCell align="right">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'firebrick',
                  }}
                  onClick={() => cancelAppt(csrf, appointment._id)}
                >
                  Cancel
                </Button>
              </TableCell>
              ) }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
