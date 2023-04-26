/**
 * Presentational component for a job.
 *
 * State: None
 *
 * Props:
 * -title - "Information officer"
 * -company - "Hall-Mills"
 * -salary - 200000
 * -equity - "0"
 *
 * JobCardList -> JobCard
 */

function JobCard({title, company, salary, equity}) {
  return (
    <div className="JobCard">
      Job info here...
    </div>
  );
}

export default JobCard;