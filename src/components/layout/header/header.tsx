import IconMore from "../../icons/icon-more";
import IconRobot from "../../icons/icon-robot";
import Tabs from "./tabs";
import UserDetails from "./user-details";

const Header = () => {
  // TODO: add color to figma
  return (
    <header className="bg-[#FFFFFF] flex flex-wrap w-full md:flex-nowrap justify-between md:border-b md:border-b-gray-100">
      <UserDetails />
      <div className="order-2 md:order-3 flex items-center gap-5 px-4">
        <IconRobot className="cursor-pointer" />
        <IconMore className="cursor-pointer" />
      </div>
      <Tabs />
    </header>
  );
};

export default Header;
