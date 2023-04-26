import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/**
 * Fetches data about jobs from API.
 * Displays list of jobs with search box.
 *
 * State:
 * - jobs - array like [{job}, ...]
 *
 * Props: None
 *
 * Route: "/jobs"
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */
function JobList () {
  return (
    <div className="JobList">
      <SearchForm handleSubmit=""/>
      <JobCardList jobs="" />
    </div>
  );
}

export default JobList;