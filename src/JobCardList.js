import JobCard from "./JobCard";

/** Renders a list of job cards.
 *
 * props:
 *  -jobs - array like [{job}, ...]
 *
 * state:
 *  -none
 *
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  return (
    <div className="JobCardList col-md-8 offset-md-2">
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.companyName}
            salary={job.salary}
            equity={job.equity}
          />
        );
      })}
    </div>
  );
}

export default JobCardList;
