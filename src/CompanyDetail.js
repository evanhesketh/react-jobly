import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from "./api";

/**
 * Fetches data on a specific company from API.
 * Displays basic company information and list of jobs.
 *
 * props:
 *  -none
 *
 * state:
 *  -company - {
 *              data: {handle: "baker-santos",...},
 *              isLoading: false,
 *              errors: null
 *             }
 *
 * effects:
 *  -makes AJAX call to API on mount to fetch data about a specific company.
 *
 * Route: "/companies/:name"
 *
 * RoutesList -> CompanyDetail -> JobCardList -> JobCard
 */

function CompanyDetail() {
  const [company, setCompany] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });
  const { handle } = useParams();

  console.log("CompanyDetail ran ", company);

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany({ data: companyData, isLoading: false, errors: null });
      } catch (err) {
        setCompany({ data: null, isLoading: false, errors: err });
      }
    }
    fetchCompany();
  }, [handle]);

  if (company.isLoading) return <div>Loading...</div>;

  if (company.errors) return <Navigate to="/" />;

  return (
    <div className="CompanyDetail pt-5">
      <h4>{company.data.name}</h4>
      <p>{company.data.description}</p>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetail;
