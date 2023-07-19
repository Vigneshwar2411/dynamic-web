import * as React from 'react';
// import Avatar from '@mui/material/Avatar';

export default function MultiActionAreaCard({ doctorDetail }) {
  return (
    <React.Fragment>
      <div className="doctor_card">
        <div className="doctor_details">
          <img alt="doctor image" src={doctorDetail.image} style={{ height: '6rem', width: '6rem' }} />
          <h6>{doctorDetail.name}</h6>
          {' '}
          <span>{doctorDetail.education}</span>
          <span>{doctorDetail.speciality}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
