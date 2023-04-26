import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/**
 * Fetches data on a specific company from API.
 * Displays basic company information and list of jobs.
 *
 * State:
 * - company - {data: {handle: "baker-santos",...}, isLoading: false}
 * Props: None
 *
 * Route: "/companies/:name"
 *
 * RoutesList -> CompanyDetail -> JobCardList -> JobCard
 */
function CompanyDetail() {
  const [company, setCompany] = useState({ data: null, isLoading: true });
  const { handle } = useParams();

  console.log("CompanyDetail ran ", company)

  useEffect(function fetchCompanyDetails() {
    async function fetchCompany() {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany({data: companyData, isLoading: false});
    }
    fetchCompany();
  }, []);

  if (company.isLoading) return <div>Loading...</div>

  return (
    <div className="CompanyDetail">
      <h2>{company.data.name}</h2>
      <p>{company.data.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
