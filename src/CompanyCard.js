import { Link } from "react-router-dom";

/**
 * Presentational component for a company card.
 *
 * State: None
 *
 * Props:
 * - name - "Anderson, Arias and Morrow"
 * - handle - "anderson-arias-morrow"
 * - description - "A Corporate Law Firm"
 * - logoUrl - "/logos/logo3.png"
 *
 * CompanyList -> CompanyCard
 */
function CompanyCard({ name, handle, description, logoUrl }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div className="CompanyCard">Company info here</div>
    </Link>
  );
}

export default CompanyCard;
