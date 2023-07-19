import React from 'react';
import './Home.style.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
// import AllTabsJs from '../AllTabs';
import BannerCarousel from '../BannerCourosel/index';
import Header from '../Header/index';
import AboutUsJs from '../AboutUs';
import AboutDoctorsJs from '../AboutDoctors/index';
import PackagesJs from '../Packages';
import AppointmentJs from '../Appointment';
import PatientCareJs from '../PatientCare';
import ContactUs from '../ContactUs';
import { UserContext } from '../../utils/ContextProviders';


function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const { userDetail } = React.useContext(UserContext);

  return (
    <React.Fragment>
      <Header isAdminUser={userDetail.admin} />
      {/* <AllTabsJs /> */}
      <div>
        <TabPanel value={0} index={0}>
          <div className="tab_panels">
            <BannerCarousel />
            <AboutUsJs />
            <AboutDoctorsJs />
            <PatientCareJs />
          </div>
        </TabPanel>
      </div>
    </React.Fragment>
  );
};
export default Home;
