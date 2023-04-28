import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext";

/**
 * Form for updating a user's profile information.
 *
 * props:
 *  -update - function to be called in parent on form submission
 *  -username - string like "user"
 *  -firstName - string like "Test"
 *  -lastName - string like "Tester"
 *  -email - string like "test@test.com"
 *
 * state:
 *  -formData - object like {username: "user", firstName: "Test", ..., errors: null}
 *
 *
 * {RoutesList} -> ProfileForm
 */

//TODO: resolve issue regarding user state being null on first render
function ProfileForm({ update }) {
  const navigate = useNavigate();
  const user = useContext(userContext);
  const [formData, setFormData] = useState({ username: user.username });

  console.log("formData in ProfileForm ", formData);
  console.log("username ", username)

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and redirect home on success, otherwise display errors. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await update (formData);
      navigate("/");
    } catch (err) {
      setFormData({...formData, errors: err });
    }
  }

  return (
    <div className="ProfileForm col-md-4 offset-md-4">
      <h3>Update</h3>
      <form className="ProfileForm-form " onSubmit={handleSubmit}>
        <label htmlFor="ProfileForm-username">Username</label>
        <input
          className="form-control"
          id="ProfileForm-username"
          name="username"
          value={formData.username}
          aria-label="Username"
          disabled
        />
        <label htmlFor="ProfileForm-firstname">First name</label>
        <input
          className="form-control"
          id="ProfileForm-firstname"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          aria-label="First name"
        />
        <label htmlFor="ProfileForm-lastname">Last name</label>
        <input
          className="form-control"
          id="ProfileForm-lastname"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          aria-label="Last name"
        />
        <label htmlFor="ProfileForm-email">Email</label>
        <input
          className="form-control"
          id="ProfileForm-email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          aria-label="Email"
        />
        <button className="SearchForm-submitBtn btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
