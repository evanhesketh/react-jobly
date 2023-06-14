import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import './form.css';

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  errors: null,
};

/**
 * Form for signing up a new user.
 *
 * props:
 *  -signup - function to be called in parent on form submission
 *
 * state:
 *  -formData - object like {username: "user", password: "password", ..., errors: null}
 *
 * {RoutesList} -> SignupForm
 */

function SignupForm({ signup }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const navigate = useNavigate();
  console.log("formData", formData);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and redirect to hompage on success. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
      navigate("/");
    } catch (err) {
      setFormData({...formData, errors: err });
    }
  }

  return (
    <div className="SignupForm col-md-4 offset-md-4">
      <h3>Signup</h3>
      {formData.errors &&
      formData.errors.map((error, idx) => <Alert key={idx} error={error} type="alert-danger"/>)}
      <form className="SignupForm-form " onSubmit={handleSubmit}>
        <label htmlFor="SignupForm-username">Username</label>
        <input
          className="form-control"
          id="SignupForm-username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          aria-label="Username"
        />
        <label htmlFor="SignupForm-password">Password</label>
        <input
          className="form-control"
          id="SignupForm-password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          aria-label="Password"
          type="password"
        />
        <label htmlFor="SignupForm-firstname">First name</label>
        <input
          className="form-control"
          id="SignupForm-firstname"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          aria-label="First name"
        />
        <label htmlFor="SignupForm-lastname">Last name</label>
        <input
          className="form-control"
          id="SignupForm-lastname"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          aria-label="Last name"
        />
        <label htmlFor="SignupForm-email">Email</label>
        <input
          className="form-control"
          id="SignupForm-email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          aria-label="Email"
        />
        <button className="SignupForm-submitBtn btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
