import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import './ProfileForm.css';

/**
 * Form for updating a user's profile information.
 *
 * props:
 *  -updateUserInfo - function to be called in parent on form submission
 *  -username - string like "user"
 *  -firstName - string like "Test"
 *  -lastName - string like "Tester"
 *  -email - string like "test@test.com"
 *
 * state:
 *  -formData - object like {username: "user", firstName: "Test", ..., errors: null}
 *
 * {RoutesList} -> ProfileForm
 */

function ProfileForm({ updateUserInfo, username, firstName, lastName, email }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username,
    firstName,
    lastName,
    email,
    errors: null,
  });

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
      await updateUserInfo(formData);
      navigate("/");
    } catch (err) {
      setFormData({ ...formData, errors: err });
    }
  }

  return (
    <div className="ProfileForm col-md-4 offset-md-4">
      <h3 className="ProfileForm-title">Update</h3>
      {formData.errors &&
        formData.errors.map((error, idx) => <Alert key={idx} error={error} type="alert-danger"/>)}
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
        <button className="ProfileForm-submitBtn btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
