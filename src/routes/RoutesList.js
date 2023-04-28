import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import PrivateRoutes from "./PrivateRoutes";
import userContext from "../userContext";
import { useContext } from "react";

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
function RoutesList({ login, signup, update }) {
  const user = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {user ? (
        <>
          <Route path="/companies" element={<CompanyList />} />

          <Route path="/companies/:handle" element={<CompanyDetail />} />

          <Route path="/jobs" element={<JobList />} />

          <Route
            path="/profile"
            element={
              <ProfileForm
                update={update}
                username={user?.username}
                firstName={user?.firstName}
                lastName={user?.lastName}
                email={user?.email}
              />
            }
          />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginForm login={login} />} />

          <Route path="/signup" element={<SignupForm signup={signup} />} />
        </>
      )}

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
