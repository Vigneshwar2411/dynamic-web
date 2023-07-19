import React, { useState } from 'react';
import { bookAppointment, cancelAppointment } from 'client/javascripts/api/appointment';
import { updatePatientDetails } from 'client/javascripts/api/user';
import { uploadPatientReports } from 'client/javascripts/api/patientDetails';
import { UserModalContext } from 'client/javascripts/utils/ContextProviders';
import appConfig from '../../config/index';

const useAppointmentForm = () => {
  const [inputs, setInputs] = useState({});
  const [department, setDepartment] = React.useState({ department: 0 });
  const [patientDetailsForm, setPatientDetailsForm] = useState({});
  const [toast, setToast] = useState({ showToast: false, toastMsg: '' });
  const [myAppointments, setMyAppointments] = React.useState([{}]);
  const [userDetail, setUserDetail] = React.useState({});
  const { setShowUserModal } = React.useContext(UserModalContext);


  const handleSubmit = (csrf, patientId, event) => {
    if (event) {
      event.preventDefault();
    }
    if (!appConfig.isLoggedIn) {
      setToast({ showToast: true, toastMsg: 'Kindly Sign In to Book an Appointment' });
      return;
    }
    bookAppointment(csrf, { ...inputs, department: department.department, patientId })
      .then(() => {
        setInputs({
          name: '',
          email: '',
          bookingDate: '',
          contactNumber: '',
          message: '',
        });
        setDepartment({ department: 0 });
        // eslint-disable-next-line max-len
        setMyAppointments(myAppointments.concat([{ ...inputs, department: department.department }]));
        setToast({ showToast: true, toastMsg: 'Appointment Booked Successfully' });
      })
      .catch(() => setToast({ showToast: true, toastMsg: 'Booking failed, Please try again later' }));
  };

  const handlePatientDetailsSubmit = (csrf, setUserDetailInContext, event) => {
    if (event) {
      event.preventDefault();
    }
    if (!appConfig.isLoggedIn) {
      setToast({ showToast: true, toastMsg: 'Kindly Sign In to update your details' });
      return;
    }
    updatePatientDetails(csrf, patientDetailsForm, patientDetailsForm.patientId)
      .then(() => {
        setUserDetailInContext(patientDetailsForm);
        setToast({ showToast: true, toastMsg: 'User Details updated Successfully' });
        setShowUserModal(false);
      })
      .catch(() => setToast({ showToast: true, toastMsg: 'Updating failed, Please try again later' }));
  };

  const uploadReports = (csrf, data, patientId, event) => {
    if (event) {
      event.preventDefault();
    }
    if (!appConfig.isLoggedIn) {
      setToast({ showToast: true, toastMsg: 'Kindly Sign In to update your details' });
      return;
    }
    console.log('data...');
    console.table([...data]);
    uploadPatientReports(csrf, data, patientId)
      .then(() => {
        setToast({ showToast: true, toastMsg: 'Reports uploaded Successfully' });
      })
      .catch(() => setToast({ showToast: true, toastMsg: 'Reports uploading failed, Please try again later' }));
  };

  const handleAppointmentCancel = (csrf, appointmentId) => cancelAppointment(csrf, appointmentId)
    .then((data) => {
      setToast({ showToast: true, toastMsg: 'Appointment Cancelled Successfully' });
      return data;
    })
    .catch(() => {
      setToast({ showToast: true, toastMsg: 'Cancellation failed, Please try again later' });
      return myAppointments;
    });

  const handleDepartmentChange = (event) => {
    if (event.target.value === 0) {
      setDepartment({ department: 0 });
    } else {
      setDepartment({ [event.target.name]: event.target.value });
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputValues => ({ ...inputValues, [event.target.name]: event.target.value }));
    if (event.target.value === '' || event.target.value === null) {
      setInputs((inputValues) => {
        delete inputValues[event.target.name];
        return { ...inputValues };
      });
    }
  };

  const handlePatientDetailsInputChange = (event) => {
    event.persist();
    setPatientDetailsForm(inputValues => ({ ...inputValues, [event.target.name]: event.target.value }));
    if (event.target.value === '' || event.target.value === null) {
      setPatientDetailsForm((inputValues) => {
        delete inputValues[event.target.name];
        return { ...inputValues };
      });
    }
  };


  return {
    handleSubmit,
    handleInputChange,
    handleDepartmentChange,
    handleAppointmentCancel,
    inputs,
    toast,
    department,
    setMyAppointments,
    myAppointments,
    userDetail,
    setUserDetail,
    patientDetailsForm,
    handlePatientDetailsInputChange,
    handlePatientDetailsSubmit,
    setPatientDetailsForm,
    uploadReports,
    setToast,
  };
};

export default useAppointmentForm;
