/**
 * Form for searching by search term.
 *
 * State:
 * - formData - object like {term: "officer"}
 *
 * Props:
 * - handleSubmit - function to be called in parent on form submission
 *
 * {JobList, CompanyList} -> SearchForm
 */
function SearchForm({handleSubmit}) {
  return (
    <form className="SearchForm">
      <label htmlFor="SearchForm-input" />
      <input
        id="SearchForm-input"
        name="term"
        placeholder="Enter search term..."
        aria-label="Term"
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;