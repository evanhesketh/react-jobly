import { Navigate, Outlet } from "react-router-dom";
import userContext from "../userContext";
import { useContext } from "react";

/**
 * Component to protect private routes.
 *
 * props:
 *  -none
 *
 * state:
 *  -none
 */

function PrivateRoutes() {
  const user = useContext(userContext);

  return (
    user ? <Outlet /> : <Navigate to="/login"/>
  );
}

export default PrivateRoutes;