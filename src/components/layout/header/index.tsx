import IconMore from "../../icons/icon-more";
import IconRobot from "../../icons/icon-robot";
import HeaderTabs from "./header-tabs";
import HeaderUserDetails from "./header-user-details";

const Header = () => {
  // TODO: add color to figma
  return (
    <header className="bg-[#FFFFFF] flex flex-wrap w-full md:flex-nowrap justify-between md:border-b md:border-b-gray-100">
      <HeaderUserDetails />
      <div className="order-2 md:order-3 flex items-center gap-5 px-4">
        <IconRobot className="cursor-pointer" />
        <IconMore className="cursor-pointer" />
      </div>
      <HeaderTabs />
    </header>
  );
};

export default Header;
