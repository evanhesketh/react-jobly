import "./JobCard.css";

/**
 * Presentational component for a job.
 *
 * Props:
 *  -title - "Information officer"
 *  -company - "Hall-Mills"
 *  -salary - 200000
 *  -equity - "0"
 *
 * state:
 *  -none
 *
 * JobCardList -> JobCard
 */

function JobCard({ title, company, salary, equity }) {
  return (
    <div className="JobCard card mb-3">
      <div className="JobCard-body card-body">
        <h5 className="JobCard-title card-title">{title}</h5>
        <p className="JobCard-company card-text">{company}</p>
        <p className="JobCard-salary card-text">
          Salary: {salary}
          <br />
          Equity: {equity}
        </p>
      </div>
    </div>
  );
}

export default JobCard;
