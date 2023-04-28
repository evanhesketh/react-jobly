import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import RoutesList from "./routes/RoutesList";
import Navigation from "./navigation/Navigation";
import JoblyApi from "./api";
import userContext from "./userContext";

/**
 * "Jobly" - An app for finding jobs
 *
 * props:
 *  -none
 *
 * state:
 *  -token - string like "ajkl;sdf89safuio13431"
 *  -currentUser - object like {username: "user", firstName: "User", ...}
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const storedToken = getTokenFromLocalStorage();
  const [token, setToken] = useState(storedToken);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  console.log("token in app", token);
  console.log("currentUser in app ", currentUser);

  useEffect(
    function fetchUserData() {
      async function fetchUser() {
        if (token) {
          const { username } = jwt_decode(token);
          JoblyApi.token = token;

          try {
            const user = await JoblyApi.getUserDetails(username);
            setCurrentUser(user);
            return;
          } catch (err) {
            setCurrentUser(null);
            JoblyApi.token = null;
            return;
          }
        }
        setCurrentUser(null);
      }
      fetchUser();
    },
    [token]
  );

  /** Get token from local storage. Returns token or null. */

  function getTokenFromLocalStorage() {
    const storedToken = localStorage.getItem("token");
    return storedToken ? storedToken : null;
  }

  /** Logs in a user. */

  async function login({ username, password }) {
    const token = await JoblyApi.getToken(username, password);
    localStorage.setItem("token", token);
    setToken(token);
  }
  /** Signs up a new user. */

  async function signup({ username, password, firstName, lastName, email }) {
    const token = await JoblyApi.register(
      username,
      password,
      firstName,
      lastName,
      email
    );
    localStorage.setItem("token", token);
    setToken(token);
  }

  /** Logs out a user. */

  function logout() {
    localStorage.removeItem("token");
    JoblyApi.token = null;
    setToken(null);
    navigate("/");
  }

  /** Updates a logged in user's profile information. */

  async function updateUserInfo({ username, firstName, lastName, email }) {
    const user = await JoblyApi.update(username, firstName, lastName, email);
    setCurrentUser({ ...user });
  }

  /** Updates user's applications to reflect applying to a job */

  async function apply(username, jobId) {
    await JoblyApi.apply(username, jobId);
    setCurrentUser({
      ...currentUser,
      applications: [...currentUser.applications, jobId],
    });
  }

  if (!currentUser && token)
    return <div className="App-signinMsg">Signing in...</div>;

  return (
      <div className="App">
        <userContext.Provider
          value={{
            username: currentUser?.username,
            firstName: currentUser?.firstName,
          }}
        >
          <Navigation logout={logout} />
          <RoutesList
            login={login}
            signup={signup}
            updateUserInfo={updateUserInfo}
            apply={apply}
            appliedJobIds={new Set(currentUser?.applications)}
            currentUser={currentUser}
          />
        </userContext.Provider>
      </div>
  );
}

export default App;
