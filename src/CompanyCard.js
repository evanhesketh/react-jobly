import { Link } from "react-router-dom";
import "./CompanyCard.css";

/**
 * * Presentational component for a company card.
 *
 * props:
 *   -name - "Anderson, Arias and Morrow"
 *   -handle - "anderson-arias-morrow"
 *   -description - "A Corporate Law Firm"
 *   -logoUrl - "/logos/logo3.png"
 *
 * state:
 *  -none
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ name, handle, description, logoUrl }) {
  return (
    <div className="CompanyCard card mb-3">
      <Link to={`/companies/${handle}`} className="CompanyCard-link">
        <div className="CompanyCard-body">
          <div className="CompanyCard-header d-flex justify-content-between">
            <h5 className="CompanyCard-name card-title">{name}</h5>
            {logoUrl !== null && (
              <img className="CompanyCard-logo" src={logoUrl} alt={name} />
            )}
          </div>
          <p className="CompanyCard-description card-text">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
