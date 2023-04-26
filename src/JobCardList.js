import JobCard from "./JobCard";

/** Renders a list of job cards.
 *
 * State: None
 *
 * Props:
 * - jobs - array like [{job}, ...]
 *
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */
function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      <JobCard title="" company="" salary="" equity="" />
      <JobCard title="" company="" salary="" equity="" />
    </div>
  );
}

export default JobCardList;
