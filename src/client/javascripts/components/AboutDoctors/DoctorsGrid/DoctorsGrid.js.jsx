import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DoctorsCard from '../DoctorsCard';
// import Typography from '@mui/material/Typography';
// import BackgroundShape from "../../Images/Common/steth-bg.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const doctorsLists = [{
  id: 1,
  name: 'Dr. B. SUNDARARAJA',
  education: 'MBBS, MS.Orthopaedics',
  speciality: 'Specialist in join replacement & spine surgery',
  regNo: 'Reg No :94483',
  description: '',
  email: '',
  phone: '9842626000',
  image: 'asc/images/broken_image.jpeg',
  linkedin: '',
},
{
  id: 2,
  name: 'Dr. A. N. RAMESH',
  education: 'M.D.(Gen.Med) D.M.(cardio)',
  speciality: 'Consultant Interventional Cardiologist',
  regNo: 'Reg No :92040',
  email: '',
  phone: '9677669393',
  image: 'asc/images/broken_image.jpeg',
  linkedin: '',
},
{
  id: 3,
  name: 'Dr. A. Vinoth',
  education: 'MBBS, MD.Radio Dianosis',
  speciality: 'Consultant Interventional Radiologist',
  regNo: 'Reg No :94361',
  email: '',
  phone: '9894057290',
  image: 'asc/images/broken_image.jpeg',
  linkedin: '',
},
{
  id: 4,
  name: 'Dr. S. VISWANATHAN',
  education: 'DA.MD(Gen Med).,DIP.NB.,PGD iab',
  speciality: 'Physician & Diabetologist',
  regNo: 'Reg No :93482',
  email: '',
  phone: '8667418323',
  image: 'asc/images/broken_image.jpeg',
  linkedin: '',
},
{
  id: 5,
  name: 'Dr. B. THANGA SARAVAN',
  education: 'MBBS, M.S.',
  speciality: 'General Surgery Mch.CTVS',
  regNo: 'Reg No :94513',
  email: '',
  phone: '9840561116',
  image: 'asc/images/broken_image.jpeg',
  linkedin: '',
},
];

export default function ResponsiveGrid() {
  return (
    <div id="about_doctors_container">
      <div id="about_doctors">
        <h3> Meet our Specialists </h3>
        <Box sx={{ flexWrap: 'wrap' }}>
          <Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 1, sm: 1, md: 12 }}>
            {Array.from(doctorsLists).map((doctorDetail, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item xs={1} sm={1} md={4} lg={4} key={`grid_item_${index}`} zeroMinWidth>
                <Item><DoctorsCard doctorDetail={doctorDetail} /></Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
