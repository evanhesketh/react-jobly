import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";
import "./Homepage.css";

/**
 * Presentational component for homepage
 *
 * props:
 *  -none
 *
 * state:
 *  -none
 *
 * Route: "/"
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const {firstName} = useContext(userContext);

  return (
    <div className="Homepage d-flex flex-column align-items-center justify-content-center">
      <div className="Homepage-jobly">Jobly</div>
      <div className="Homepage-slogan">
        All the jobs in one, convenient place.
      </div>
      {!firstName && (
        <div className="Homepage-btns">
          <Link to="/login">
            {" "}
            <button className="Homepage-loginBtn btn btn-primary btn-sm">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="Hompage-signupBtn btn btn-primary btn-sm">
              Signup
            </button>
          </Link>
        </div>
      )}
      {firstName && (
        <div className="Homepage-welcome">Welcome back, {firstName}</div>
      )}
    </div>
  );
}

export default Homepage;
