import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import SignInShark from "./components/SignInShark.jsx";
import SignUpShark from "./components/SignUpShark.jsx";
import StartupDash from "./components/Startup-page/StartupDash.jsx";
import SharkDash from "./components/Shark-side/SharkDash.jsx";
import App2 from "./components/admin-page/App2.jsx";
import InvestorMeetings from "./components/admin-page/InvestorMeetings.jsx";
import InvestorProfile from "./components/admin-page/InvestorProfile.jsx";
import RegistrationPage from "./components/admin-page/RegistrationPage.jsx";
import StartupMeetings from "./components/admin-page/StartupMeetings.jsx";
import Room from "./components/video/Room.jsx";
import Home from "./components/video/Home.jsx";
import "./App.css";

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
          <Route path="/StartupDash" element={<StartupDash />} />
          <Route path="/SharkDash" element={<SharkDash />} />
          <Route path="/App2" element={<App2 />} />
          <Route path="/InvestorMeetings" element={<InvestorMeetings />} />
          <Route path="/InvestorProfile" element={<InvestorProfile />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/StartupMeetings" element={<StartupMeetings />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/room/:roomID" element={<Room />} />
        </Routes>
      </div>
    </Router>
  );
}
// Hello
export default App;
