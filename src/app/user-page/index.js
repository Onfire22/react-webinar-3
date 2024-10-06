import React from "react";
import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import useSelector from "../../hooks/use-selector";
import Head from "../../components/head";
import PageLayout from "../../components/page-layout";
import UserContent from "../../components/user-content";
import useStore from "../../hooks/use-store";
import { useCallback, useEffect } from "react";

const UserPage = () => {
  const store = useStore();
  
  const getUser = useCallback(() => store.actions.profile.getUser(), [store]);

  const select = useSelector((state) => ({
    name: state?.profile?.user?.name,
    email: state?.profile?.user?.email,
    phone: state?.profile?.user?.phone,
  }));

  
  useEffect(() => {
    getUser();
  }, []);

  return (
    <PageLayout>
      <Head name={select.name} title="Магазин">
        <LocaleSelect />  
      </Head>
      <Navigation />
      <UserContent select={select} />
    </PageLayout>
  );
};

export default React.memo(UserPage);
