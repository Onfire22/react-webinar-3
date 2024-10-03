import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import useSelector from "../../hooks/use-selector";
import Head from "../head";
import PageLayout from "../page-layout";
import UserContent from "../user-content";

const UserPage = () => {
  const select = useSelector((state) => ({
    loggedIn: state?.user?.loggedIn,
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
