import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import appConfig from '../../config';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Thank you for visiting. Please click below to Sign out of your account
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        sx={{
          backgroundColor: 'firebrick',
          color: 'white'
        }}
        onClick={() => { window.location.href = (`${appConfig.appBaseURL}/asc/logout`); }}
      >
        Sign Out
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function LoggedOut() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
