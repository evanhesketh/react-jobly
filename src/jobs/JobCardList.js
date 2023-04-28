import JobCard from "./JobCard";

/** Renders a list of job cards.
 *
 * props:
 *  -jobs - array like [{job}, ...]
 *  -apply - function to be called in parent when user applies for a job
 *  -appliedJobIds - set of job ids like {1, 2, 3, ...}
 *
 * state:
 *  -appliedJobs - array like [1, 2, 3, ...]
 *
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */

function JobCardList({ jobs, apply, appliedJobIds }) {
  return (
    <div className="JobCardList pb-3 col-md-8 offset-md-2">
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.companyName}
            salary={job.salary}
            equity={job.equity}
            apply={apply}
            applicationStatus={appliedJobIds.has(job.id)}
          />
        );
      })}
    </div>
  );
}

export default JobCardList;
