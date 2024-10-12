import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css';

const SignInLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSignIn = useCallback(() => {
    navigate('/login', { state: { back: location.pathname } });
  }, [location.pathname]);

  return <button className="SignIn-button" type="button" onClick={goToSignIn}>Войдите</button>
};

export default SignInLink;
