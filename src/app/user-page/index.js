import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import useSelector from "../../hooks/use-selector";
import Head from "../../components/head";
import PageLayout from "../../components/page-layout";
import UserContent from "../../components/user-content";

const UserPage = () => {
  const select = useSelector((state) => ({
    email: state?.user?.userData?.email,
    phone: state?.user?.userData?.phone,
    name: state?.user?.userData?.name,
  }));

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

export default UserPage;
