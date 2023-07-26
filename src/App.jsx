import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Features from "./components/pages/Features";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import AdminHome from "./AdminDashboard/AdminHome";
import UserHome from "./UserDashboard/UserHome";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Normal Pages */}
          <Route exact path="/Home" element={<Landing />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Features" element={<Features />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          {/* Admin Pages */}
          <Route exact path="/Admin/Home" element={<AdminHome />} />
          {/* User Pages */}
          <Route exact path="/User/Home" element={<UserHome />} />
          <Route exact path="/" element={<Navigate to="/Home" replace />} />
          <Route exact path="/ErrorPage" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/ErrorPage" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
