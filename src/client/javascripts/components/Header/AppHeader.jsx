import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ForumIcon from '@mui/icons-material/Forum';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from 'react-router-dom';
import { DrawerContext } from '../../utils/ContextProviders';
import MenuDrawer from '../MenuDrawer';
import config from '../../config/config.json';
import appConfig from '../../config/index';
import NavBar from '../NavBar';

// eslint-disable-next-line max-len
const {
  appBar: {
    styles: configStyles, features: {
      socialMedia, showSearchBar, showProfileMenu, googleSignin,
    },
  },
} = config;
const {
  instagram, twitter, youtube, facebook,
} = socialMedia;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#EFEFEF',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: configStyles.primaryColor,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AppHeader({ page = 'homePage', isAdminUser = false }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [socialAnchorEl, setSocialAnchorEl] = React.useState(null);

  const drawerValue = { drawerOpen, setDrawerOpen };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isSocialMenuOpen = Boolean(socialAnchorEl);

  const mobileMainMenuItems = {
    mainItems: [
      {
        name: 'Home',
        id: 'app',
        icon: <HomeIcon />,
      },
      {
        name: 'Health Packages',
        id: 'packages_container',
        icon: <HealthAndSafetyIcon />,
      },
      {
        name: 'Appointment',
        id: 'appointment_main_container',
        icon: <EventNoteIcon />,
      },
      {
        name: 'Testimonials',
        id: 'patient_care_main_container',
        icon: <ForumIcon />,
      },
      {
        name: 'Contact Us',
        id: 'contact_us_main_container',
        icon: <ContactPhoneIcon />,
      },
      {
        name: 'Locate Us',
        id: 'app',
        icon: <LocationOnIcon />,
      },
      {
        name: 'About Us',
        id: 'about_us_main_container',
        icon: <InfoIcon />,
      },
    ],
    socialMediaItems: [
      {
        name: 'Instagram',
        icon: <InstagramIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />,
        enabled: instagram.enabled,
        link: instagram.link,
      },
      {
        name: 'Facebook',
        icon: <FacebookIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />,
        enabled: facebook.enabled,
        link: facebook.link,
      },
      {
        name: 'Youtube',
        icon: <YouTubeIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />,
        enabled: youtube.enabled,
        link: youtube.link,
      },
      {
        name: 'Twitter',
        icon: <TwitterIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />,
        enabled: twitter.enabled,
        link: twitter.link,
      },
    ],
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (link) => {
    setAnchorEl(null);
    setSocialAnchorEl(null);
    handleMobileMenuClose();
    if (typeof link === 'string') {
      window.open(link, '_blank');
    }
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSocialMenuOpen = (event) => {
    setSocialAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        zIndex: '3000',
      }}
    >
      { appConfig.isLoggedIn && (
      <MenuItem onClick={handleMenuClose}>
        <Link to="/asc/profile" id="profile_link">
          <ListItemIcon>
            <PersonIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />
          </ListItemIcon>
          Profile
        </Link>
      </MenuItem>
      ) }
      <MenuItem data-name="sign_out" onClick={handleMenuClose}>
        <ListItemIcon>
          <ManageAccountsIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />
        </ListItemIcon>
        <Link class="sign-out-link" to="/asc/logged_out"> Sign Out </Link>
      </MenuItem>
    </Menu>
  );

  const socialMenuId = 'primary-search-social-menu';
  const renderSocialMenu = () => (
    <Menu
      anchorEl={socialAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={socialMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isSocialMenuOpen}
      onClose={handleMenuClose}
    >
      {mobileMainMenuItems.socialMediaItems.map(item => item.enabled && (
        <MenuItem onClick={() => handleMenuClose(item.link)}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </MenuItem>
      ))}
      { (
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <InstagramIcon sx={{ color: configStyles.primaryColor }} fontSize="small" />
          </ListItemIcon>
          <ListItemText>Instagram</ListItemText>
        </MenuItem>
      ) }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle sx={{ color: configStyles.primaryColor }} />
        </IconButton>
        <Typography
          variant="p"
          noWrap
          component="p"
          sx={configStyles.menuItems.profile}
        >
          <Link to="/asc/profile" id="profile_link"> Profile </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="manage account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ManageAccountsIcon sx={{ color: configStyles.primaryColor }} />
        </IconButton>
        <Typography
          variant="p"
          noWrap
          component="p"
          sx={configStyles.menuItems.profile}
        >
          <Link class="sign-out-link" to="/asc/logged_out"> Sign Out </Link>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={configStyles.appBarStyle}>
        <Toolbar sx={{
          paddingRight: {
            xs: '0.5rem',
            lg: '2rem',
          },
        }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={configStyles.hamburgerButton}
            onClick={handleDrawerOpen}
          >
            <MenuIcon sx={{ color: configStyles.primaryColor }} />
          </IconButton>
          <Link to="/asc/dashboard" id="nav_link">
            <Box component="img" alt="Main Logo" src={`asc/images/${configStyles.logo}`} sx={configStyles.logoStyle} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={configStyles.titleText}
          >

            {configStyles.title}
          </Typography>
          {showSearchBar && (
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: configStyles.primaryColor }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {
            googleSignin && !appConfig.isLoggedIn
            && (
            <Button
              sx={{
                padding: {
                  xs: '0.25rem',
                  lg: '0.5rem 1rem',
                },
              }}
              variant="outlined"
              href={`${appConfig.appBaseURL}/asc/login`}
              color="secondary"
              startIcon={<LoginIcon />}
            >
              <Typography
                variant="caption"
                sx={{
                  display: {
                    xs: 'none',
                    lg: 'unset',
                  },
                }}
              >
                Signin
              </Typography>
            </Button>
            )
          }
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {
              appConfig.isLoggedIn && isAdminUser && (
                <Link to="/asc/admin">
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="admin panel"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    sx={{ padding: '1.25rem' }}
                  >
                    <AdminPanelSettingsIcon sx={{ color: configStyles.primaryColor }} />
                  </IconButton>
                </Link>
              )
            }
            {showProfileMenu && appConfig.isLoggedIn && (
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ padding: '1.25rem' }}
            >
              <AccountCircle sx={{ color: configStyles.primaryColor }} />
            </IconButton>
            )}
            { socialMedia && socialMedia.enabled && (
            <IconButton
              size="large"
              edge="end"
              aria-label="social media connections"
              aria-controls={socialMenuId}
              aria-haspopup="true"
              onClick={handleSocialMenuOpen}
              color="inherit"
              sx={{ padding: '1.25rem' }}
            >
              <ConnectWithoutContactIcon sx={{ color: configStyles.primaryColor }} />
            </IconButton>
            )}
          </Box>
          {showProfileMenu && appConfig.isLoggedIn && (
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: configStyles.primaryColor }} />
            </IconButton>
          </Box>
          )}
        </Toolbar>
      </AppBar>
      {
        page !== 'profilePage' && <NavBar menuItems={mobileMainMenuItems.mainItems} />
      }
      <DrawerContext.Provider value={drawerValue}>
        <MenuDrawer
          mobileMainMenuItems={mobileMainMenuItems}
          socialMediaEnabled={socialMedia && socialMedia.enabled}
        />
      </DrawerContext.Provider>
      {showProfileMenu && renderMobileMenu}
      {showProfileMenu && renderMenu}
      {socialMedia && socialMedia.enabled && renderSocialMenu()}
    </Box>
  );
}
