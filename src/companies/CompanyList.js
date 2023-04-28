import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../api";

/**
 * Fetches data about companies from API.
 * Displays list of companies and search box.
 *
 * props:
 *  -none
 *
 * state:
 *  -companiesApiData - object like {data: [{company}, ...], isLoading: false}
 *  -searchTerm - string like "anderson"
 *
 * effects:
 *  -fetchCompaniesData:
 *    -makes AJAX call to API on mount to fetch data about all companies.
 *    -makes AJAX call to API on searchTerm state change to fetch filtered data.
 *
 *
 * Route: "/companies"
 *
 * RoutesList -> CompanyList -> {CompanyCard, SearchForm}
 */

function CompanyList() {
  const [companiesApiData, setCompaniesApiData] = useState({
    data: null,
    isLoading: true,
  });
  const [searchTerm, setSearchTerm] = useState(null);

  console.log("companiesApiData", companiesApiData);

  useEffect(
    function fetchCompaniesData() {
      async function fetchCompanies() {
        let companiesData;

        if (!searchTerm) {
          companiesData = await JoblyApi.getCompanies();
        } else {
          companiesData = await JoblyApi.getCompanies(searchTerm);
        }

        setCompaniesApiData({ data: companiesData, isLoading: false });
      }
      fetchCompanies();
    },
    [searchTerm]
  );

  /** Called on search submission to update companiesApiData
   *  with data filtered by search term
   * */

  async function getFilteredCompanies(formData) {
    if (formData === searchTerm) return;

    setCompaniesApiData({ data: null, isLoading: true });
    setSearchTerm(formData);
  }

  if (companiesApiData.isLoading) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="CompanyList pt-5 pb-3">
      <div className="CompanyList-search mb-4 offset-md-2">
        <SearchForm handleSearchSubmit={getFilteredCompanies} />
      </div>
      <div className="CompanyList-companies col-md-8 offset-md-2">
        {companiesApiData.data.length > 0 ? (
          companiesApiData.data.map((company) => {
            return (
              <CompanyCard
                key={company.handle}
                handle={company.handle}
                name={company.name}
                description={company.description}
                logoUrl={company.logoUrl}
              />
            );
          })
        ) : (
          <p>Your search did not return any results.</p>
        )}
      </div>
    </div>
  );
}

export default CompanyList;
