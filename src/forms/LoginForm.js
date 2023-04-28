import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

/**
 * Form for logging in a user.
 *
 * props:
 *  -login - function to be called in parent on form submission
 *
 * state:
 *  -formData - object like {username: "user", password: "password", errors: null}
 *
 * {RoutesList} -> LoginForm
 */

const INITIAL_FORM_DATA = { username: "", password: "", errors: null };

function LoginForm({ login }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and redirect home on success, otherwise show errors */
  async function handleSubmit(evt) {

    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setFormData({...INITIAL_FORM_DATA, errors: err });
    }
  }

  return (
    <div className="LoginForm col-md-4 offset-md-4">
      <h3>Login</h3>
      {formData.errors &&
      formData.errors.map((error, idx) => <Alert key={idx} error={error} type="alert-danger"/>)}
      <form className="LoginForm-form " onSubmit={handleSubmit}>
        <label htmlFor="LoginForm-username">Username</label>
        <input
          className="form-control"
          id="LoginForm-username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          aria-label="Username"
        />
        <label htmlFor="LoginForm-password">Password</label>
        <input
          className="form-control"
          id="LoginForm-password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          aria-label="Password"
          type="password"
        />
        <button className="SearchForm-submitBtn btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
