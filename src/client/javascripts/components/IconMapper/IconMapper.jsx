import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ForumIcon from '@mui/icons-material/Forum';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import config from "../../config/config.json";
const {
    appBar: {
        styles: configStyles,
    },
} = config;

export default function IconMapper({iconName, iconSize}) {
    const iconMap = {
        'instagram': <InstagramIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'facebook': <FacebookIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'youtube': <YouTubeIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'twitter': <TwitterIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'homeicon': <HomeIcon sx={{ color: configStyles.primaryColor }} fontSize="medium" />,
        'infoicon': <InfoIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'healthandsafetyicon': <HealthAndSafetyIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'eventnoteicon': <EventNoteIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'forumicon': <ForumIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'locationonicon': <LocationOnIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
        'contactphoneicon': <ContactPhoneIcon sx={{ color: configStyles.primaryColor }} fontSize={iconSize} />,
    };

    return (
        <>
            {iconMap[iconName]}
        </>
    );
}