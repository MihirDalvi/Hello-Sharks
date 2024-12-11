import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SignUp from "./components/Startup-page/SignUp.jsx";
import SignIn from "./components/Startup-page/SignIn.jsx";
import SignInShark from "./components/Shark-side/SignInShark.jsx";
import SignUpShark from "./components/Shark-side/SignUpShark.jsx";
import AdminSignIn from "./components/admin-page/AdminSignIn.jsx";
import StartupDash from "./components/Startup-page/StartupDash.jsx";
import SharkDash from "./components/Shark-side/SharkDash.jsx";
import AdminDash from "./components/admin-page/AdminDash.jsx";
import App2 from "./components/admin-page/App2.jsx";
import InvestorMeetings from "./components/admin-page/InvestorMeetings.jsx";
import InvestorProfile from "./components/admin-page/InvestorProfile.jsx";
import RegistrationPage from "./components/admin-page/RegistrationPage.jsx";
import StartupMeetings from "./components/admin-page/StartupMeetings.jsx";
import Room from "./components/video/Room.jsx";
import Home from "./components/video/Home.jsx";
import Vediocall from "./components/video/Vediocall.jsx";
import AuthSystem from "./components/AuthSystem.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignInSharks" element={<SignInShark />} />
          <Route path="/SignUpSharks" element={<SignUpShark />} />
          <Route path="/AdminSignIn" element={<AdminSignIn />} />
          <Route path="/StartupDash" element={<StartupDash />} />
          <Route path="/SharkDash" element={<SharkDash />} />
          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/AuthSystem" element={<AuthSystem />} />
          <Route path="/App2" element={<App2 />} />
          <Route path="/InvestorMeetings" element={<InvestorMeetings />} />
          <Route path="/InvestorProfile" element={<InvestorProfile />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/StartupMeetings" element={<StartupMeetings />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="/Vediocall" element={<Vediocall />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
// Hello
export default App;
