import { Outlet } from "react-router-dom";
import Header from "./header/header";
import MenuBar from "./menu-bar/menu-bar";

const Layout = () => {
  return (
    <div className="mt-2 md:mt-0 flex flex-col md:flex-row  relative min-h-screen">
      <MenuBar />
      <div className="flex-1 md:shadow-2xl">
        <div className="w-full">
          <Header />
        </div>
        <div className="px-4 md:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
