import { NavLink } from "react-router-dom";
import "./Navigation.css";

/**
 * Navigation bar.
 *
 * props:
 *  -none
 *
 * state:
 *  -none
 *
 * Links to "/", "/companies", "/jobs"
 *
 * App -> Navigation
 */
function Navigation() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Jobly
        </NavLink>
        <ul className="navbar-nav ms-auto">
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
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
