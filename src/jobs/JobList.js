import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../api";

/**
 * Fetches data about jobs from API.
 * Displays list of jobs with search box.
 *
 * props:
 *  -apply - function to be called in parent when applying for a job
 *  -appliedJobIds - set of job ids like {1, 2, 3, ...}
 *
 * state:
 *  -jobsApiData - array like [{job}, ...]
 *  -searchTerm - string like "teacher"
 *
 * effects:
 *  -fetchJobsData:
 *    -makes AJAX call to API on mount to fetch data about all jobs.
 *    -make AJAX call on searchTerm state change to fetch filtered data.
 *
 * Route: "/jobs"
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList({apply, appliedJobIds}) {
  const [jobsApiData, setJobsApiData] = useState({
    data: null,
    isLoading: true,
  });
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(
    function fetchJobsData() {
      async function fetchJobs() {
        let jobsData;

        if (!searchTerm) {
          jobsData = await JoblyApi.getJobs();
        } else {
          jobsData = await JoblyApi.getJobs(searchTerm);
        }

        setJobsApiData({ data: jobsData, isLoading: false });
      }
      fetchJobs();
    },
    [searchTerm]
  );

  /** Called on search submission to update title state. */

  async function getFilteredJobs(formData) {
    if (formData === searchTerm) return;

    setJobsApiData({ data: null, isLoading: true });
    setSearchTerm(formData);
  }

  if (jobsApiData.isLoading) return <div>Loading...</div>;

  return (
    <div className="JobList pt-5">
      <div className="JobList-search mb-4 offset-md-2">
        <SearchForm handleSearchSubmit={getFilteredJobs} />
      </div>
      <div className="JobList-jobcard-list">
        {jobsApiData.data.length > 0 ? (
          <JobCardList jobs={jobsApiData.data} apply={apply} appliedJobIds={appliedJobIds}/>
        ) : (
          <p>Your search did not return any results.</p>
        )}
      </div>
    </div>
  );
}

export default JobList;
