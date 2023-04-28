/**
 * Presentational component for an Alert to display error messages.
 *
 * Props:
 *  -errors - Array like ["Invalid username/password"]
 *
 * State:
 *  -none
 *
 * {LoginForm, SignupForm} -> Alert
 */

function Alert({errors}) {
  return (
    <div className="Alert alert alert-danger role='alert'">
      <div className="Alert-msg">{errors}</div>
    </div>
  );
}

export default Alert;