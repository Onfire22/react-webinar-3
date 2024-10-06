import React from "react";
import { Navigate } from "react-router-dom";
import useSelector from "../../hooks/use-selector";

const PrivateRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (!loggedIn) {
    return <Navigate to='/login' replace />
  }
  return children;
};

export default React.memo(PrivateRoute);
