import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerContext } from '../../utils/ContextProviders';
import IconMapper from '../IconMapper';

export default function MenuDrawer({ navItems, socialMediaItems, socialMediaEnabled }) {
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
  };
  const list = (anchor, fn, val) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={() => fn(!val)}
      onKeyDown={() => fn(!val)}
    >
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => handleTabChange(item.name, item.id)}>
            <ListItemButton>
              <ListItemIcon>
                <IconMapper iconName={item.icon.toLowerCase()} iconSize={item.size} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {socialMediaEnabled && (
      <List>
        {socialMediaItems.map((item, index) => item.enabled && (
        <ListItem key={item.name} disablePadding onClick={() => handleTabChange(item.name, item.id)}>
          <ListItemButton>
            <ListItemIcon>
              <IconMapper iconName={item.name.toLowerCase()} iconSize={item.size} />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
      )}
    </Box>
  );

  const { drawerOpen, setDrawerOpen } = React.useContext(DrawerContext);

  return (
    <div>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
        >
          {list('left', setDrawerOpen, drawerOpen)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
