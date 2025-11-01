import NavBar from "@/components/core/NavBar";
import { Outlet } from "react-router";

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Home;
