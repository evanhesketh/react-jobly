import { NavLink } from "react-router-dom";

function Navigation () {
  return (
    <nav className="Navigation">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  );
}

export default Navigation;