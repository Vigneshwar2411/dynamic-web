import React from 'react';
import { UserModalContext, UserAppointmentContext } from 'client/javascripts/utils/ContextProviders';
import ContentArea from '../ContentArea';
import './App.style.scss';

const App = () => {
  const [userModal, setShowUserModal] = React.useState({ showUserModal: false, userDetail: {} });
  const [appointmentModal, setAppointmentModal] = React.useState({
    showAppointmentModal: false,
    patientId: null,
  });

  const userModalContext = { userModal, setShowUserModal };
  const userAppointmentModalContext = { appointmentModal, setAppointmentModal };


  return (
    <div>
      <UserModalContext.Provider value={userModalContext}>
        <UserAppointmentContext.Provider value={userAppointmentModalContext}>
          {/* <AppInfo name={this.props.profile.name} /> */}
          <ContentArea />
        </UserAppointmentContext.Provider>
      </UserModalContext.Provider>
    </div>
  );
};

export default App;
