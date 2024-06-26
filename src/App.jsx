import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SalesmanDashboard from "./components/Salesman/SalesmanDashboard.jsx";
import LeadManagement from "./components/Salesman/LeadManagement.jsx";
import AppointmentSetter from "./components/Salesman/AppointmentSetter.jsx";
import ToDoList from "./components/Salesman/ToDoList.jsx";
import UserProfile from "./components/Salesman/UserProfile.jsx";
import Settings from "./components/Salesman/Settings.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/salesman-dashboard" element={<SalesmanDashboard />} />
        <Route exact path="/lead-management" element={<LeadManagement />} />
        <Route exact path="/appointment-setter" element={<AppointmentSetter />} />
        <Route exact path="/to-do-list" element={<ToDoList />} />
        <Route exact path="/user-profile" element={<UserProfile />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;