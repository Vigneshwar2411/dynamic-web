import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PinDropIcon from '@mui/icons-material/PinDrop';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AllTabsJs() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setValue(0);
    window.scrollTo({ top: 0 });
  }, []);

  const handleChange = (event, newValue) => {
    const tabToDivMapping = ['root', 'about_us_main_container', 'packages_container', 'appointment_main_container', 'patient_care_main_container', 'contact_us_main_container', 'root'];
    const element = document.getElementById(tabToDivMapping[newValue]);
    const headerOffset = 200;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setValue(newValue);
  };

  const tabStyle = () => ({
    textTransform: 'capitalize', fontWeight: 'bold', letterSpacing: 'unset', color: '#53595f',
  });
  return (
    <div id="tabs" style={{ marginTop: '4.15rem' }}>
      <Box sx={{
        width: '100%', borderRadius: '6px', marginBottom: '1rem', boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)', position: 'fixed', zIndex: '2000',
      }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered sx={{ backgroundColor: 'white' }}>
          <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} sx={tabStyle()} iconPosition="start" />
          <Tab icon={<LocalHospitalIcon />} label="About Us" {...a11yProps(1)} sx={tabStyle()} iconPosition="start" />
          <Tab icon={<HealthAndSafetyIcon />} label="Health PackagesJs" {...a11yProps(2)} sx={tabStyle()} iconPosition="start" />
          <Tab icon={<BookmarkAddIcon />} label="AppointmentJs" {...a11yProps(3)} sx={tabStyle()} iconPosition="start" />
          <Tab icon={<BookmarkAddIcon />} label="Testimonials" {...a11yProps(4)} sx={tabStyle()} iconPosition="start" />
          <Tab icon={<ContactPhoneIcon />} label="Contact Us" {...a11yProps(5)} sx={tabStyle()} iconPosition="start" />
          <Tab icon={<PinDropIcon />} label="Locate Us" {...a11yProps(6)} sx={tabStyle()} iconPosition="start" />
        </Tabs>
      </Box>
    </div>
  );
}
