/**
 * Presentational component for an Alert to display error messages.
 *
 * Props:
 *  -error - String like "Invalid username/password"
 *
 * State:
 *  -none
 *
 * {LoginForm, SignupForm} -> Alert
 */

function Alert({error}) {
  return (
    <div className="Alert alert alert-danger role='alert'">
      <div className="Alert-msg">{error}</div>
    </div>
  );
}

export default Alert;