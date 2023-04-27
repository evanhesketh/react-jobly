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
  return (
    <div className="Homepage d-flex flex-column align-items-center justify-content-center">
      <div className="Homepage-jobly">Jobly</div>
      <div className="Homepage-slogan">
        All the jobs in one, convenient place.
      </div>
    </div>
  );
}

export default Homepage;
