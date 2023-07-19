import React from 'react';
import './AboutUs.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { css } from '@emotion/react';
import { cx } from '@emotion/css';
import { mq } from '../../constants/index';
// import BackgroundShape from '../Images/Common/contact-shape1.svg';

function createData(day, time) {
  return { day, time };
}


const responsiveContainerStyle = css`
  margin: 2rem 2rem;
  ${mq.lg} {
    margin: 2rem 10rem;
  }
`;

const rows = [
  createData('Monday', '8.00 AM - 7.00 PM'),
  createData('Tuesday', '8.00 AM - 7.00 PM'),
  createData('Wednesday', '8.00 AM - 7.00 PM'),
  createData('Thursday', '8.00 AM - 7.00 PM'),
  createData('Friday', '8.00 AM - 7.00 PM'),
  createData('Saturday', '8.00 AM - 2.00 PM'),
  createData('Sunday', '8.00 AM - 2.00 PM'),
];

export function TimingsTable() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="Timings table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const AboutUsJs = () => (
  <div id="about_us_main_container">
    <div id="about_us">
      <h3> About Us </h3>
      <div className="about_us_container">
        <div className={cx(responsiveContainerStyle)}>
          <h4>A hospital is a health care institution providing patient treatment with specialized medical</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci amet aperiam, consequatur cupiditate debitis dolore earum exercitationem expedita id, iure magnam nulla rerum suscipit temporibus ut veritatis vitae voluptates?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci amet aperiam, consequatur cupiditate debitis dolore earum exercitationem expedita id, iure magnam nulla rerum suscipit temporibus ut veritatis vitae voluptates?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci amet aperiam, consequatur cupiditate debitis dolore earum exercitationem expedita id, iure magnam nulla rerum suscipit temporibus ut veritatis vitae voluptates?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci amet aperiam, consequatur cupiditate debitis dolore earum exercitationem expedita id, iure magnam nulla rerum suscipit temporibus ut veritatis vitae voluptates?
          </p>
        </div>
        <div className="about_us_timings">
          <h4>Our Timings</h4>
          {TimingsTable()}
        </div>
      </div>
    </div>

  </div>
);
export default AboutUsJs;
