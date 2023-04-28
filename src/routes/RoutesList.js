import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import ProfileForm from "../forms/ProfileForm";
import userContext from "../userContext";
import { useContext } from "react";

/**
 * List of routes for App.
 * For invalid route, renders hompage.
 *
 * props:
 *  -login - function to be called when a user logs in
 *  -register - function to be called when a user registers
 *  -updateUserInfo - function to be called when a logged in user updates profile
 *  -apply - function to be called when a user applies for a job
 *  -appliedJobIds - set of job ids like {1, 2, 3}
 *  -currentUser - object containing all user data
 *    like {username: "test", firstName: "tester", ...}
 *
 * state:
 *  -none
 *
 * App -> RoutesList
 */
function RoutesList({ login, signup, updateUserInfo, apply, appliedJobIds, currentUser }) {
  const {username, firstName} = useContext(userContext);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      {username ? (
        <>
          <Route path="/companies" element={<CompanyList />} />

          <Route path="/companies/:handle" element={<CompanyDetail apply={apply} appliedJobIds={appliedJobIds}/>} />

          <Route path="/jobs" element={<JobList apply={apply} appliedJobIds={appliedJobIds}/>} />

          <Route
            path="/profile"
            element={
              <ProfileForm
                updateUserInfo={updateUserInfo}
                username={username}
                firstName={firstName}
                lastName={currentUser?.lastName}
                email={currentUser?.email}
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
