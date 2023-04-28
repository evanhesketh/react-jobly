import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import RoutesList from "./routes/RoutesList"
// import RoutesList from "./RoutesList";
import Navigation from "./navigation/Navigation"
// import Navigation from "./Navigation";
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

  console.log("token in app", token);
  console.log("currentUser in app ", currentUser);

  useEffect(
    function fetchUserData() {
      async function fetchUser() {
        let username;
        try {
          const tokenData = jwt_decode(token);
          username = tokenData.username;
        } catch (err) {
          console.log("No token stored. Please login");
          setCurrentUser(null);
          return;
        }
        JoblyApi.token = token;
        const user = await JoblyApi.getUserDetails(username);
        setCurrentUser(user);
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
    const user = await JoblyApi.getUserDetails(username);
    localStorage.setItem("token", token);
    setCurrentUser(user);
    setToken(token);
  }

  /** Logs out a user. */

  function logout() {
    localStorage.removeItem("token");
    JoblyApi.token = null;
    setToken(null);
  }

  /** Updates a logged in user's profile information. */

  async function update({ username, firstName, lastName, email }) {
    const user = await JoblyApi.update(username, firstName, lastName, email);
    setCurrentUser({ ...user });
  }

  if (!currentUser && token) return null;

  return (
    <BrowserRouter>
      <div className="App">
        <userContext.Provider value={currentUser}>
          <Navigation logout={logout} />
          <RoutesList login={login} signup={signup} update={update} />
        </userContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
