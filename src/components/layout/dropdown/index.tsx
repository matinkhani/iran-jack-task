import React, { useState } from "react";
import { TGroupProps } from "./dropdown.type";
import Option from "./dropdow.option";
import IconChevron from "../../icons/icon-chevron";

const DropDown: React.FC<TGroupProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-[183px] min-h-screen border-r border-r-gray-200 hidden md:block">
      <div
        className={`p-2 cursor-pointer hover:bg-[#EBEBEB] flex items-center m-1 rounded ${
          isOpen && "bg-[#EBEBEB]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconChevron
          className={`mr-2  ${isOpen ? "rotate-180" : "rotate-360"}`}
        />
        <span className="font-bold text-gray-900">{title}</span>
      </div>
      {isOpen && (
        <div className="pl-2">
          {options.map((option, index) => (
            <Option key={index} label={option.label} items={option.items} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
