import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import MyNavbar from './components/Navbar'; // Import the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';
import MasterLeavePeriod from './pages/leaveperiod/MasterLeavePeriod';
// Example page components
const Home = () => <h2>Home Page</h2>;
const TransactionLeavePeriod = () => <h2>Leave Period Transaction Page</h2>;
const ReportLeavePeriod = () => <h2>Leave Period Report Page</h2>;
// You can create similar components for Leave Type, Leave Configuration, etc.

const App = () => {
  return (
    <Router>
      <MyNavbar /> {/* Include your Navbar */}
      
      {/* Define the Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leave-period/master" element={<MasterLeavePeriod />} />
        <Route path="/leave-period/transaction" element={<TransactionLeavePeriod />} />
        <Route path="/leave-period/report" element={<ReportLeavePeriod />} />

      </Routes>
    </Router>
  );
};

export default App;
