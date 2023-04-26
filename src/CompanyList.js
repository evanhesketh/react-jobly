import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

/**
 * Fetches data about companies from API.
 * Displays list of companies and search box.
 *
 * State:
 * - companies - array like [{company}, ...]
 *
 * Props: None
 *
 * Route: "/companies"
 *
 * RoutesList -> CompanyList -> {CompanyCard, SearchForm}
 */
function CompanyList () {
  return (
    <div className="CompanyList">
      <SearchForm handleSubmit=""/>
      <CompanyCard name="" description="" logoUrl=""/>
      <CompanyCard name="" description="" logoUrl=""/>
      <CompanyCard name="" description="" logoUrl=""/>
    </div>
  );
}

export default CompanyList;