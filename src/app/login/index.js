import React, { useCallback } from "react";
import Head from "../../components/head";
import PageLayout from "../../components/page-layout";
import LoginForm from "../../components/login-form";
import useSelector from "../../hooks/use-selector";
import useStore from "../../hooks/use-store";
import Navigation from "../../containers/navigation";

const Login = () => {
  const store = useStore();
  const select = useSelector((state) => ({
    name: state?.user?.userData?.name,
    loggedIn: state?.user?.loggedIn,
    status: state?.user?.status,
    error: state?.user?.error,
  }));

  const callbacks = {
    logIn: useCallback((data) => store.actions.user.logIn(data), [store]),
    reset: useCallback(() => store.actions.user.resetError(), [store]),
  };

  return (
    <PageLayout>
      <Head title="Магазин" name={select.name} />
      <Navigation />
      <LoginForm status={select.status} error={select.error} onSubmit={callbacks.logIn} reset={callbacks.reset} />
    </PageLayout>
  );
};

export default React.memo(Login);
