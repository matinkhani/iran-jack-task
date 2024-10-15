import { FC } from "react";
import { TMenuBarItems } from "./menu-bar.type";

interface MenuBarItemsprops extends TMenuBarItems {
  activePage: string;
  setActivePage: (name: string) => void;
}

const MenuBarItems: FC<MenuBarItemsprops> = ({
  icon,
  name,
  activePage,
  setActivePage,
}) => {
  return (
    <div
      key={name}
      className={`flex flex-col items-center justify-center cursor-pointer gap-2 md:gap-[3px] md:w-[68px] md:h-14 md:mb-2 md:ml-1 md:mr-1 md:border-l-2 ${
        activePage === name
          ? "md:border-l-[#5B5FC7] "
          : "md:border-l-transparent"
      }`}
      onClick={() => setActivePage(name)}
    >
      <span className={`${activePage === name && "stroke-[#5B5FC7]"}`}>
        {icon}
      </span>
      <p
        className={`${
          activePage === name ? "text-[#5B5FC7]" : "text-[#242424]"
        } text-xs font-medium`}
      >
        {name}
      </p>
    </div>
  );
};

export default MenuBarItems;
