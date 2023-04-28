import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";

/**
 * List of routes for App.
 * For invalid route, renders hompage.
 *
 * props:
 *  -login - function to be called when a user logs in
 *  -register - function to be called when a user registers
 *  -update - function to be called when a logged in user updates profile
 *
 * state:
 *  -none
 *
 * App -> RoutesList
 */
function RoutesList({login, signup, update}) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<CompanyList />} />

      <Route path="/companies/:handle" element={<CompanyDetail />} />

      <Route path="/jobs" element={<JobList />} />

      <Route path="/login" element={<LoginForm login={login}/>} />

      <Route path="/signup" element={<SignupForm signup={signup}/>} />

      <Route path="/profile" element={<ProfileForm update={update}/>} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
