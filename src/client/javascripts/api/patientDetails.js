import http from './http';

export const getPatientDetails = () => http.get('/patients/getAll', {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res.data.patientRecords).catch(err => err);

export const uploadPatientReports = /* istanbul ignore next */ (csrf, data, patientId) => {
  console.table([...data]);
  return http.post(`/patients/uploadReports/${patientId}`, { data }, {
    headers: {
      'X-XSRF-TOKEN': csrf,
      'Content-Type': 'multipart/form-data;',
    },
  }).then(res => res.data).catch(err => err);
};
