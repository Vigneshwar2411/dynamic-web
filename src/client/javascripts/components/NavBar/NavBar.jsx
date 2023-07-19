import * as React from 'react';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import config from 'client/javascripts/config/config.json';

const NavBar = ({ menuItems }) => {
  const [selectedTab, setSelectedTab] = React.useState(menuItems[0].name);
  const {
    appBar: {
      styles: configStyles,
    },
  } = config;

  const handleTabChange = (name, id) => {
    // const tabToDivMapping = ['root', 'about_us_main_container', 'packages_container', 'appointment_main_container', 'patient_care_main_container', 'contact_us_main_container', 'root'];
    const element = document.getElementById(id);
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    // setValue(newValue);
    setSelectedTab(name);
  };

  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '6px',
        marginBottom: '1rem',
        boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
        position: 'fixed',
        zIndex: '10',
        marginTop: '4rem',
        display: {
          xs: 'none',
          lg: 'block',
          xl: 'block',
        },
        backgroundColor: configStyles.tabBarBgColor,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <CssBaseline />
        {
          menuItems.map(item => (
            <ListItem
              button
              key={item.name}
              sx={{
                borderBottom: selectedTab === item.name ? '3px solid firebrick' : 0,
                cursor: 'pointer',
                minHeight: 'inherit',
              }}
              onClick={() => handleTabChange(item.name, item.id)}
            >
              <ListItemIcon sx={{
                minWidth: '2.5rem',
              }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        }
      </Toolbar>
    </Box>
  );
};

export default NavBar;
