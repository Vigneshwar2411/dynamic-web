import React from 'react';

export const DrawerContext = React.createContext({ drawerOpen: false, setDrawerOpen: () => {} });

export const CsrfContext = React.createContext('');

export const UserContext = React.createContext({ userDetail: {}, setUserDetail: () => {} });

export const UserModalContext = React.createContext({
  userModal: {
    showUserModal: false,
    userDetail: {},
    editDetails: false,
  },
  setShowUserModal: () => {},
});

export const UserAppointmentContext = React.createContext({
  appointmentModal: {
    showAppointmentModal: false,
    patientId: null,
  },
  setAppointmentModal: () => {},
});
