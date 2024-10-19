import { MenuBarData } from "./menu-bar.data";
import IconMore from "../../icons/icon-more";
import MenuBarItems from "./menu-bar-items";
import { useState } from "react";

const MenuBar = () => {
  const [activePage, setActivePage] = useState<string>("Activity");

  return (
    <div className="fixed md:relative bottom-0 w-full md:w-fit md:min-h-screen pb-2 md:pb-0 z-50 bg-[#FFFFFF] border-t border-t-gray-200 md:border-none md:bg-gray-100">
      <div className="flex md:flex-col items-center justify-center flex-wrap mt-3">
        <div className="flex md:flex-col">
          <div className="w-full flex md:flex-col md:gap-0 items-center justify-center gap-7">
            {MenuBarData.slice(0, 4).map((item) => (
              <MenuBarItems
                icon={item.icon}
                name={item.name}
                key={item.name}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            ))}
          </div>
          {MenuBarData.length > 4 && (
            <div className="hidden md:flex md:flex-col flex-wrap">
              {MenuBarData.slice(4).map((item) => (
                <MenuBarItems
                  icon={item.icon}
                  name={item.name}
                  key={item.name}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              ))}
            </div>
          )}
          <div className="flex flex-col items-center gap-2 ml-7 md:ml-0">
            <IconMore />
            <p className="md:hidden text-[#242424] text-xs font-mediu">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
