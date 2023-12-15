import { Outlet, useNavigation } from "react-router-dom"; // defines where the content of the child routes rendered
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/*navigation.state === "loading" && <p>Loading...</p>*/}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
