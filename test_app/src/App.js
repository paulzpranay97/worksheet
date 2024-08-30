import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Spin, Typography, ConfigProvider } from 'antd';
import FormCom from './Components/FormCom';
import RotatePrompt from './Components/RotatePrompt';
import SearchPatient from './Components/SearchPatient';
import 'remixicon/fonts/remixicon.css';


// const loadingStyle: React.CSSProperties = {
//   textAlign: 'center',
//   marginTop: '20%',
// };

// const customSpinnerStyle: React.CSSProperties = {
//   color: '#8a62a5', // Custom color for the spinner
// };


function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [loading, setLoading] = useState(true); 

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  useEffect(() => {
    // const checkAuthentication = async () => {
    //   const authUrl = 'https://marketing.ps-baby.com/ajax';
    //   try {
    //     const response = await axios.get(authUrl, {
    //       params: {
    //         action: 'check_auth',
    //       },
    //     });
    //     if (response.data.isloggedin) {
    //       setIsAuthenticated(true); 
    //     } else {
    //       window.location.href = 'https://marketing.ps-baby.com/login'; 
    //     }
    //   } catch (error) {
    //     console.error('Error checking authentication:', error);
    //     window.location.href = 'https://marketing.ps-baby.com/login';
    //   } finally {
    //     setLoading(false); 
    //   }
    // };

    // checkAuthentication(); 

    // for checking on local host 
    setIsAuthenticated(true); 
    setLoading(false);
  }, []); 

  useEffect(() => {
    const fetchPatientData = async (patientId) => {
      const base_url = 'https://marketing.ps-baby.com/ajax';
      // const base_url = 'http://localhost/marketing/ajax';
      try {
        const response = await axios.get(base_url, {
          params: {
            action: 'egg_thaw_record_by_sales',
            id: patientId,
          },
        });

        if (response.data) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
    if (selectedPatient) {
      fetchPatientData(selectedPatient.id);
    }
  }, [selectedPatient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  // if (loading) {
  //   // Display the loading spinner while checking authentication
  //   return (
  //     <div style={loadingStyle}>
  //       <Spin size="large" tip="Loading..." style={customSpinnerStyle} />
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <>
      <RotatePrompt />
      <div style={{ position: 'relative', boxSizing: 'border-box' }}>
        {!selectedPatient && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 1,
              pointerEvents: 'auto',
            }}
          />
        )}

        <div
          style={{
            opacity: selectedPatient ? 1 : 0.95,
            pointerEvents: selectedPatient ? 'auto' : 'none',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <FormCom patient={formData} />
        </div>
      </div>
      {!selectedPatient && (
        <SearchPatient onPatientSelect={handlePatientSelect} />
      )}
    </>
  );
}

export default App;



// function App() {
//   const [isSalesIdPresent, setIsSalesIdPresent] = useState(false);
//   const [salesDetails, setSalesDetails] = useState(null); // State to hold sales details
//   const navigate = useNavigate();

//   // const base_url = 'http://localhost/marketing/ajax';
//   const base_url = 'https://marketing.ps-baby.com/ajax';
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const salesId = params.get('sales_id');

//     if (salesId) {
//       setIsSalesIdPresent(true);
//       fetchSalesDetails(salesId); 
//     } else {
//       setIsSalesIdPresent(false);
//       navigate('/access-denied'); 
//     }
//   }, [navigate]);

//   const fetchSalesDetails = async (salesId) => {
//     try {
//       const response = await axios.get(base_url, {
//         params: {
//           action: 'egg_thaw_record_by_sales', 
//           id: salesId
//         }
//       });

//       if (response.data) {
//         setSalesDetails(response.data); // Set the sales details in state
//       }
//     } catch (error) {
//       console.error('Error fetching sales details:', error);
//       navigate('/access-denied'); // Redirect to access denied on error
//     }
//   };



//   return (
//     <>
//       <RotatePrompt />
//       {isSalesIdPresent && salesDetails ? (
//         <FormCom salesDetails={salesDetails} /> // Pass sales details as props
//       ) : (
//         <div>
//           <h2>Access Denied</h2>
//           <p>You need a valid sales ID to access this page.</p>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;