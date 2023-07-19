import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserDetailModal from 'client/javascripts/components/UserDetailModal';
import UserAppointmentModal from 'client/javascripts/components/UserAppointmentModal';
import Loadable from 'react-loadable';
import Toast from 'client/javascripts/components/Toast';
import { UserAppointmentContext, UserContext, UserModalContext } from 'client/javascripts/utils/ContextProviders';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import config from '../../config';
import { RouterPaths } from '../../constants';
import DummyLoader from './DummyLoader';
import { getUserDetails } from '../../api/user';
import './ContentArea.style.scss';

/* istanbul ignore next */
const HomePage = Loadable({
  loader: () => import('../Home'),
  loading: DummyLoader,
});

/* istanbul ignore next */
const LoggedOut = Loadable({
  loader: () => import('../LoggedOut'),
  loading: DummyLoader,
});

/* istanbul ignore next */
const ProfilePage = Loadable({
  loader: () => import('../Profile'),
  loading: DummyLoader,
});

/* istanbul ignore next */
const AdminPage = Loadable({
  loader: () => import('../Admin'),
  loading: DummyLoader,
});

const getPath = path => config.appRoute + path;

const ContentArea = () => {
  const [userDetail, setUserDetail] = React.useState({});

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        if (config.isLoggedIn) {
          const userDetails = await getUserDetails();
          await setUserDetail(userDetails);
        }
      } catch (err) {
        console.log('Error getting User details', err);
      }
    };
    fetchUser();
  }, []);

  const userDetailContext = { userDetail, setUserDetail };
  const { toast } = useAppointmentForm();
  const { userModal, setShowUserModal } = React.useContext(UserModalContext);
  const { appointmentModal, setAppointmentModal } = React.useContext(UserAppointmentContext);

  return (
    <div className="content-area">
      {
        toast.showToast && <Toast message={toast.toastMsg} />
      }
      {
        userModal && userModal.showUserModal
        && (
        <UserDetailModal
          userModalData={userModal}
          setShowUserModal={setShowUserModal}
          setUserDetailInContext={setUserDetail}
        />
        )
      }
      {
        appointmentModal && appointmentModal.showAppointmentModal
        && (
          <UserAppointmentModal
            showAppointmentModal={appointmentModal.showAppointmentModal}
            patientId={appointmentModal.patientId}
            setAppointmentModal={setAppointmentModal}
          />
        )
      }
      <UserContext.Provider value={userDetailContext}>
        <Switch>
          <Route path={getPath(RouterPaths.ROOT)} component={HomePage} />
          <Route path={getPath(RouterPaths.PROFILE)} component={ProfilePage} />
          <Route path={getPath(RouterPaths.ADMIN)} component={AdminPage} />
          <Route path={getPath(RouterPaths.LOGGEDOUT)} component={LoggedOut} />
          {/* place this route at the end to handle 404 */}
        </Switch>
      </UserContext.Provider>
    </div>
  );
};

export default ContentArea;
