# rv-sales-lead-tool


Full Stack Web Application Prompt 
{
Instruction
Develop a full stack, fully functional Web Application for an RV Dealership Sales Lead and Tracking Tool. The application should focus on new lead capture, adding new leads to a lead management tool, existing lead edit and update, lead deletion, and automated lead assignment to salesmen. The login screen will be the web app's landing page. Allow for up to 10 salesman users, 2 sales manager users, and 1 admin user, each with personalized dashboards and login credentials. Additionally, integrate automated lead capture from the dealership website, support CSV import of existing customers, and implement automated email marketing based on 1-year, 3-year, and 5-year intervals from the date of purchase.
Login Credentials
* Salesman Default Login Credentials:
    * Username: User
    * Password: 123456
* Sales Manager Default Login Credentials:
    * Username: Manager
    * Password: 123456
* Admin Default Login Credentials:
    * Username: Admin
    * Password: 123456
Credentials can be customized in the web app admin panel. 
}


{
Frontend Prompt
Instruction
Develop the frontend for an RV Dealership Sales Lead and Tracking Web App Tool.
Requirements
Responsive Grid-Based Layout:
* Use a flexible grid system (e.g., CSS Grid or Flexbox) for a responsive layout.
* Ensure the layout adapts seamlessly to different screen sizes (desktop, tablet, mobile).
* Divide the screen into distinct sections for optimal organization and readability.
Modular Structure:
* KPI Summary Module: Display key performance indicators at the top (total leads, conversion rate, total sales revenue, average deal size).
* Recent Leads Module: Show a list of the most recent leads with details (name, contact information, RV type of interest, lead source, lead status, assigned salesperson).
* Sales Pipeline Module: Visualize the progress of leads through different stages using a Kanban-style board or a pipeline chart with drag-and-drop functionality.
* Upcoming Appointments/Tasks Module: List upcoming appointments and tasks for the current user.
* Salesperson Performance Module (Manager Dashboard only): Display individual salesperson performance metrics with comparison charts.
* Lead Source Performance Module (Manager Dashboard only): Visualize lead source effectiveness using charts or graphs.
* Lead Assignment Module: Display the status of automated lead assignments.
* Email Marketing Module: Display upcoming automated marketing emails and their schedules.
Dashboards:
* Sales Manager Dashboard: Include modules for KPI Summary, Recent Leads, Sales Pipeline, Upcoming Appointments/Tasks, Salesperson Performance, Lead Source Performance, Lead Assignment, and Email Marketing.
* Admin Dashboard: Include administrative tools for managing users, viewing all leads, configuring system settings, and importing customer data via CSV.
Theme:
* Color Palette:
    * Primary Colors: #FCE63B, #FC2427
    * Accent Colors: #02E8FF, #1401FB
    * Secondary Colors: #FF0A6C, #2C26FA, #0BFASF, #101FF8
    * Highlight Colors: #06DFFE, #FA027C, #FD2CE0, #0514F3
    * Neon Colors: #39FF14 (neon green), #FF7F00 (neon orange)
* Typography: Use clean, legible sans-serif fonts like Open Sans, Lato, or Roboto. Use larger font sizes for headings and key data points.
* Layout: Implement a responsive grid-based layout with ample padding and subtle gradients.
* Iconography: Use clear, recognizable icons.
Interactivity:
* Design intuitive buttons, dropdowns, etc., with hover effects and subtle animations.
* Ensure that the UI adapts to different screen sizes and devices.
* Follow WCAG guidelines for an inclusive design.
Tech Stack
* HTML, CSS, JavaScript (or a frontend framework like React, Vue.js, or Angular)
* Charting Library: D3.js, Chart.js, or similar for data visualizations

Backend Prompt
Instruction
Develop the backend for an RV Dealership Sales Lead and Tracking Web App Tool.
Requirements
Authentication and Authorization:
* Implement user authentication (login, logout) and authorization (role-based access control).
* Ensure secure password storage and handling.
* Differentiate access for salespeople, sales managers, and administrators.
Database Management:
* Set up a relational database to store leads, appointments, tasks, user information, and dashboard data.
* Create tables for storing data:
    * Users (username, email, password, role)
    * Leads (name, contact information, RV type, lead source, status, assigned salesperson)
    * Appointments (date, time, customer name, RV type, appointment type)
    * Sales Data (leads generated, conversion rates, sales revenue, deal size)
    * Performance Metrics (individual salesperson performance, lead source effectiveness)
    * Admin Tools (user management, system settings)
    * Customer Data (for importing existing customers)
Automated Lead Capture:
* Integrate with the dealership website to capture new leads automatically.
* Optionally, integrate with third-party APIs to import leads from other sources.
Automated Lead Assignment:
* Implement a round-robin method for automated lead assignment to salesmen.
CSV Import:
* Support CSV import functionality for existing customers.
* Validate and process CSV data to populate the customer database.
Automated Email Marketing:
* Implement automated email marketing based on 1-year, 3-year, and 5-year intervals from the date of purchase.
* Send personalized marketing emails to customers based on their purchase history.
API Development:
* Develop RESTful APIs for frontend integration.
* Implement CRUD operations for leads, appointments, tasks, and user data.
* Ensure endpoints are secure and protected based on user roles.
Data Processing:
* Calculate KPIs (total leads, conversion rate, total sales revenue, average deal size).
* Track and update the status of leads through different sales pipeline stages.
* Generate reports on salesperson performance and lead source effectiveness.
* Provide APIs for Sales Manager and Admin dashboards.
Tech Stack
* Backend Framework: Node.js with Express, Python with Flask or Django, or Java with Spring Boot.
* Database: PostgreSQL, MySQL, or MongoDB.
* Authentication Library: Passport.js (Node.js), Django Allauth (Django), or similar.
* Email Library: Nodemailer (Node.js), Django Email (Django), or similar.
* Data Processing: Use libraries like Pandas (Python) for data analysis and processing.
}


Step 1: Set up Development Environment




# Install Node.js and npm if not already installed
# Install Create React App globally
npm install -g create-react-app




# Create React app
npx create-react-app frontend




# Navigate to the frontend directory
cd frontend




# Install required packages
npm install redux react-redux axios styled-components




Step 2: Initialize Project Structure




frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── ForgotPassword.js
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── ManagerDashboard.js
│   │   │   └── SalesmanDashboard.js
│   │   ├── LeadManagement/
│   │   │   └── LeadManagement.js
│   │   ├── AppointmentSetter/
│   │   │   └── AppointmentSetter.js
│   │   ├── ToDoList/
│   │   │   └── ToDoList.js
│   │   ├── UserProfile/
│   │   │   └── UserProfile.js
│   │   ├── Settings/
│   │   │   └── Settings.js
│   │   ├── Navbar/
│   │   │   └── Navbar.js
│   ├── redux/
│   ├── services/
│   ├── styles/
│   ├── App.js
│   └── index.js
└── package.json




Step 3: Create Authentication Components




// src/components/Auth/Login.js
import React from 'react';
import styled from 'styled-components';




const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;




const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
`;




const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
`;




const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #FC2427;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #FCE63B;
  }
`;




const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};




export default Login;




Step 4: Develop Dashboards for Admin, Manager, and Salesman




// src/components/Dashboard/AdminDashboard.js
import React from 'react';
import styled from 'styled-components';




const DashboardContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;




const AdminDashboard = () => {
  return (
    <DashboardContainer>
      <h1>Admin Dashboard</h1>
      {/* Add components and data visualizations here */}
    </DashboardContainer>
  );
};




export default AdminDashboard;




Step 5: Implement Lead Management, Appointment Setter, and To-Do List Components




// src/components/LeadManagement/LeadManagement.js
import React from 'react';
import styled from 'styled-components';




const LeadManagementContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;




const LeadManagement = () => {
  return (
    <LeadManagementContainer>
      <h1>Lead Management</h1>
      {/* Add lead management functionalities here */}
    </LeadManagementContainer>
  );
};




export default LeadManagement;




Step 6: Create User Profile and Settings Components




// src/components/UserProfile/UserProfile.js
import React from 'react';
import styled from 'styled-components';




const UserProfileContainer = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 100vh;
`;




const UserProfile = () => {
  return (
    <UserProfileContainer>
      <h1>User Profile</h1>
      {/* Add user profile functionalities here */}
    </UserProfileContainer>
  );
};




export default UserProfile;




Step 7: Implement Navigation (Navbar)




// src/components/Navbar/Navbar.js
import React from 'react';
import styled from 'styled-components';




const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
`;




const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>App Name</h1>
      <div>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </div>
    </NavbarContainer>
  );
};




export default Navbar;




Step 8: Apply Theme and Global Styles




// src/styles/global.js
import { createGlobalStyle } from 'styled-components';




const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #101FF8;
    color: #FFFFFF;
  }




  a {
    color: #FCE63B;
    text-decoration: none;
    &:hover {
      color: #FC2427;
    }
  }
`;




export default GlobalStyle;




Step 9: Integrate Components into App.js




// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import LeadManagement from './components/LeadManagement/LeadManagement';
import UserProfile from './components/UserProfile/UserProfile';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './styles/global';




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/lead-management" component={LeadManagement} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}




export default App;

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/rv-sales-lead-tool.git
cd rv-sales-lead-tool
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
