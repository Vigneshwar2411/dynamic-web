import http from './http';

export const bookAppointment = /* istanbul ignore next */ (csrf, data) => http.post('/appointment/book', { data }, {
  headers: {
    'X-XSRF-TOKEN': csrf,
    'Content-Type': 'application/json',
  },
}).then(res => res.status);

export const cancelAppointment = /* istanbul ignore next */ (csrf, data) => http.post('/appointment/cancel', { data }, {
  headers: {
    'X-XSRF-TOKEN': csrf,
    'Content-Type': 'application/json',
  },
}).then(res => res.data.appointmentRecords).catch(err => err);

export const getAppointments = () => http.get('/appointment/appointments', {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res.data.appointmentRecords).catch(err => err);

export const getUserAppointments = patientId => http.get(`/appointment/appointments/${patientId}`, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res.data.appointmentRecords).catch(err => err);
