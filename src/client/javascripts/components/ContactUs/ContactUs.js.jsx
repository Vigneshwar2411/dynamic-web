import React from 'react';
import './ContactUs.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUsJs = () => (
  <div id="contact_us_main_container">
    <div className="contact_us_background_shape">
      <img src="asc/images/contact-shape1.svg" alt="shape" />
    </div>
    <div id="contact_us">
      <h3> Stay in Touch with Us </h3>
      <h6>We are always looking to make things easier for you. Our aim is to provide our customers with the best medical facilities, constant care, and reliable support. If you would like to get in touch with a doctor from a specific department, would like some specific information about the services we provide, or just have a question for us, please fill up the Form given below and we will get back to you.</h6>

      <div className="contact_us_container">
        <div className="contact_us_form">
          <form onSubmit={() => {}}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Message"
              multiline
              variant="outlined"
              rows={4}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button variant="contained">Submit</Button>
          </form>
        </div>
      </div>
    </div>

  </div>
);
export default ContactUsJs;
