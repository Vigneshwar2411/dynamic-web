import React from 'react';
import './PatientCare.scss';
// import BackgroundShape from '../Images/Common/contact-shape2.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BannerCarousel from '../BannerCourosel';


const PatientCareJs = () => {
  const patientCareBanners = [
    {
      img: 'asc/images/Testmonial1.jpeg',
      title: 'Health',
      color: '#5e89a5',
    },
    {
      img: 'asc/images/Testimonial2.jpeg',
      title: 'Health',
      color: '#FFF',
    },
  ];
  return (
    <div id="patient_care_main_container">
      {/* <div className="background_shape"> */}
      {/*  <img src={BackgroundShape} alt="shape" /> */}
      {/* </div> */}
      <div id="patient_care">
        <h3> Testimonial and Patient Care </h3>
        <h6>Bringing healthcare of International standards within the reach of every individual.</h6>

        <div className="patient_care_container">
          <div className="patient_care_carousel">
            <BannerCarousel bannerItems={patientCareBanners} itemSection={false} navButtonsAlwaysVisible={false} />
          </div>
          <div className="patient_care_description">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">Testimonial 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6">Testimonial 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography variant="h6">Testimonial 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

    </div>
  );
};
export default PatientCareJs;
