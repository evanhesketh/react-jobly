import "./JobCard.css";
import userContext from "../userContext";
import { useContext } from "react";

/**
 * Presentational component for a job.
 *
 * Props:
 *  -title - "Information officer"
 *  -company - "Hall-Mills"
 *  -salary - 200000
 *  -equity - "0"
 *  -apply - function to be called in parent to apply for a job
 *  -id - 1
 *  -applicationStatus - true/false
 *
 * state:
 *  -none
 *
 * JobCardList -> JobCard
 */

function JobCard({ title, company, salary, equity, apply, id, applicationStatus}) {
  const { username } = useContext(userContext);

  function handleClick() {
    apply(username, id);
  }

  return (
    <div className="JobCard card mb-3">
      <div className="JobCard-body card-body">
        <h5 className="JobCard-title card-title">{title}</h5>
        <p className="JobCard-company card-text">{company}</p>
        <p className="JobCard-salary card-text">
          {salary ? `Salary: ${salary}` : "Salary: no salary information"}
          <br />
          {equity ? `Equity: ${equity}` : "Equity: no equity information"}
        </p>
        {applicationStatus ? (
          <button className="Jobcard-apply btn btn-primary" disabled>
            Applied
          </button>
        ) : (
          <button
            className="Jobcard-apply btn btn-primary"
            onClick={handleClick}
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
}

export default JobCard;
