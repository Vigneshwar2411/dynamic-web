import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';


// eslint-disable-next-line react/prop-types
const UserInfo = ({ userDetail, updateUser, openEditDetails }) => {
  const patientKeys = {
    patientId: 'Id',
    name: 'Name',
    email: 'Email',
    contactNumber: 'Contact',
  };
  const constructDetails = (keyName, detail) => (
    <React.Fragment>
      <Typography variant="p" color="text.secondary">
        <b>{`${patientKeys[keyName]}`}</b>
        {' '}
        {`${detail}`}
      </Typography>
      <br />
      <br />
    </React.Fragment>
  );

  return (
    <Card sx={{
      margin: '4rem 7rem',
      padding: '1rem',
    }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: '1.16rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
          }}
        >
          Patient Details
        </Typography>
        {
          Object.keys(userDetail).map((key) => {
            const displayKeys = Object.keys(patientKeys);
            if (displayKeys.includes(key)) {
              return constructDetails(key, userDetail[key]);
            }
            return null;
          })
        }
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: 'firebrick',
          }}
          startIcon={<EditIcon />}
          onClick={() => openEditDetails(true)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserInfo;
