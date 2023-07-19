import React from 'react';
import Header from 'client/javascripts/components/Header/AppHeader';
import Toast from 'client/javascripts/components/Toast';
import useAppointmentForm from 'client/javascripts/components/Appointment/customHooks';
import {UserAppointmentContext, UserContext, UserModalContext} from 'client/javascripts/utils/ContextProviders';
import './Admin.stlye.scss';
import PatientDetailsTable from 'client/javascripts/components/Admin/PatientDetailsTable.js';
import UploadPatientReportModal from 'client/javascripts/components/Admin/UploadPatientReportModal.js';
import AddAdmin from 'client/javascripts/components/Admin/AddAdmin.js';
import Button from '@mui/material/Button';
import { getPatientDetails } from '../../api/patientDetails';

const Admin = () => {
  const {
    toast,
  } = useAppointmentForm();

  const { userDetail } = React.useContext(UserContext);
  const { setShowUserModal } = React.useContext(UserModalContext);
  const { setAppointmentModal } = React.useContext(UserAppointmentContext);
  const [patients, setPatients] = React.useState([]);
  const [uploadReportDetails, setUploadReportDetails] = React.useState({
    showUploadModal: false,
    patientDetail: {},
  });
  const [addAdmin, setAddAdmin] = React.useState({
    showAddAdminModal: false,
  });


  React.useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const patientDetails = await getPatientDetails();
        await setPatients(patientDetails);
      } catch (err) {
        console.error(`Error fetching patient details ${err}`);
      }
    };
    fetchPatientDetails();
  }, []);

  return (
    <div id="admin_page_container">
      <Header page="profilePage" isAdminUser={userDetail.admin} />
      {
        toast.showToast && <Toast message={toast.toastMsg} />
      }
      {
        uploadReportDetails && uploadReportDetails.showUploadModal
        && (
        <UploadPatientReportModal
          uploadReportDetails={uploadReportDetails}
          setUploadReportDetails={setUploadReportDetails}
        />
        )
      }
      {
        addAdmin && addAdmin.showAddAdminModal
        && (
          <AddAdmin
            addAdminDetails={addAdmin}
            setAddAdmin={setAddAdmin}
          />
        )
      }
      <h3>{`Hey Welcome ${userDetail.name}. You are an Admin.`}</h3>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'firebrick',
        }}
        onClick={() => setAddAdmin({ showAddAdminModal: true })}
      >
        Add Admin
      </Button>
      {
        patients && patients.length > 0
        && (
          <React.Fragment>
            <h4> Patients List</h4>
            <PatientDetailsTable
              patients={patients}
              openDetails={patientDetail => setShowUserModal({
                showUserModal: true,
                userDetail: patientDetail,
                editDetails: false,
              })}
              openAppointments={(patientId) => {
                setAppointmentModal({
                  showAppointmentModal: true,
                  patientId,
                });
              }}
              openUploadReport={patientDetail => setUploadReportDetails({
                patientDetail,
                showUploadModal: true,
              })}
            />
          </React.Fragment>
        )
      }
    </div>
  );
};

export default Admin;
