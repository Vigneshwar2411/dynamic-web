import React from 'react';
import Header from 'client/javascripts/components/Header';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import { getAppointments } from 'client/javascripts/api/appointment';
import MyAppointments from 'client/javascripts/components/Appointment/MyAppointments.js';
import './Profile.style.scss';
import Toast from 'client/javascripts/components/Toast/index';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import UserInfo from 'client/javascripts/components/Profile/UserInfo.js';
import Chip from '@mui/material/Chip';
import appConfig from '../../config/index';
import { UserContext, UserModalContext } from '../../utils/ContextProviders';

const Profile = () => {
  const {
    setMyAppointments,
    myAppointments,
    handleAppointmentCancel,
    toast,
  } = useAppointmentForm();

  async function cancel(csrf, id) {
    const remainingAppointments = await handleAppointmentCancel(csrf, id);
    setMyAppointments(remainingAppointments);
  }

  React.useEffect(async () => {
    try {
      if (appConfig.isLoggedIn) {
        const myAppts = await getAppointments();
        await setMyAppointments(myAppts);
      }
    } catch (err) {
      console.log('Error getting appointments', err);
    }
  }, []);

  const { userDetail, setUserDetail } = React.useContext(UserContext);
  const { setShowUserModal } = React.useContext(UserModalContext);

  return (
    <React.Fragment>
      <Header page="profilePage" isAdminUser={userDetail.admin} />
      {
        toast.showToast && <Toast message={toast.toastMsg} />
      }
      {
        appConfig.isLoggedIn ? (
          <div id="profile_page_container">
            { userDetail
              && userDetail.patientId
              && (
              <UserInfo
                userDetail={userDetail}
                updateUser={setUserDetail}
                openEditDetails={show => setShowUserModal({
                  showUserModal: show,
                  userDetail,
                  editDetails: true,
                })}
              />
              ) }
            {myAppointments && myAppointments.length > 0
              ? (
                <div id="my_appointments">
                  <h3> My Appointments </h3>
                  <MyAppointments
                    appointments={myAppointments}
                    page="profilePage"
                    cancelAppt={cancel}
                  />
                </div>
              )
              : (
                <div id="my_appointments">
                  <h3> No Appointments found </h3>
                </div>
              )
            }
            {
              userDetail.reports && userDetail.reports.length > 0
                ? (
                  <div id="my_reports">
                    <h3>My Reports</h3>
                    {
                      userDetail.reports.map(r => (
                        <Chip
                          label={r.attachmentName}
                          sx={{
                            margin: '0.5rem',
                            cursor: 'Pointer',
                          }}
                          component="a"
                          href={r.attachmentUrl}
                          target="_blank"
                        />
                      ))
                    }
                  </div>
                ) : (
                  <div id="my_reports">
                    <h3> No Reports found </h3>
                  </div>
                )
            }
          </div>
        ) : (
          <React.Fragment>
            <h3 style={{ paddingTop: '5rem' }}> Kindly Sign In to check your Profile and details. </h3>
            <Button variant="outlined" href={`${appConfig.appBaseURL}/asc/login`} color="secondary" startIcon={<LoginIcon />}>
              SignIn
            </Button>
          </React.Fragment>
        )
      }
    </React.Fragment>
  );
};

export default Profile;
