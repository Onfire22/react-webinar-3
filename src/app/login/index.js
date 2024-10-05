import Head from "../../components/head";
import PageLayout from "../../components/page-layout";
import LoginForm from "../../components/login-form";
import useSelector from "../../hooks/use-selector";
import useStore from "../../hooks/use-store";
import Navigation from "../../containers/navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const store = useStore();
  const navigate = useNavigate();
  const select = useSelector((state) => ({
    name: state?.user?.userData?.name,
    loggedIn: state?.user?.loggedIn,
    error: state?.user?.error,
  }));

  useEffect(() => {
    if (select.loggedIn) navigate(-1);
  }, []);

  const logIn = (data) => store.actions.user.logIn(data);

  return (
    <PageLayout>
      <Head title="Магазин" name={select.name} />
      <Navigation />
      <LoginForm error={select.error} onSubmit={logIn} />
    </PageLayout>
  );
};

export default Login;
