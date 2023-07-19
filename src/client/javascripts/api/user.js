import http from './http';

export const getUserDetails = () => http.get('/users/details', {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res.data.userRecords).catch(err => err);


export const updatePatientDetails = /* istanbul ignore next */ (csrf, data, patientId) => http.put(`/users/updateDetails/${patientId}`, { data }, {
  headers: {
    'X-XSRF-TOKEN': csrf,
    'Content-Type': 'application/json',
  },
}).then(res => res.data.updatedRecord).catch(err => err);
