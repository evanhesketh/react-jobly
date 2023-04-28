import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import userContext from "../userContext";

/**
 * Navigation bar.
 *
 * props:
 *  -logout
 *
 * state:
 *  -none
 *
 * If user is logged in:
 *
 *  Links to "/", "/companies", "/jobs", "/profile"
 *
 * If user is not logged in:
 *
 *  Links to "/", "/signup", "/login"
 *
 * App -> Navigation
 */
function Navigation({ logout }) {
  const user = useContext(userContext);

  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Jobly
        </NavLink>
        {!user && (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        )}
        {user && (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/" onClick={logout}>
                Logout {user.username}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
