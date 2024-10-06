import { Navigate } from "react-router-dom";
import useSelector from "../../hooks/use-selector";

const LoginRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  if (!loggedIn) {
    <Navigate to="/login" replace />
  }
  return children;
};

export default LoginRoute;
