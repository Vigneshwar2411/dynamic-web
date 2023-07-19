import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function PatientDetailsTable({
  patients, openDetails, openUploadReport, openAppointments,
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">PatientId</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Appointments</TableCell>
            <TableCell align="right">Report</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map(detail => (
            <TableRow
              key={detail.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {detail.name}
              </TableCell>
              <TableCell align="right">{detail.patientId}</TableCell>
              <TableCell align="right">{detail.gender}</TableCell>
              <TableCell align="right">{detail.age}</TableCell>
              <TableCell align="right">{detail.contactNumber}</TableCell>
              <TableCell align="right">{detail.email}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'firebrick',
                  }}
                  onClick={() => openDetails(detail)}
                >
                  More Details
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'firebrick',
                  }}
                  onClick={() => openAppointments(detail.patientId)}
                >
                  History
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'firebrick',
                  }}
                  onClick={() => openUploadReport(detail)}
                >
                  Upload Report
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
