import { useState } from "react";
import { TOptionProps } from "./dropdown.type";
import Item from "./dropdown.item";
import IconChevron from "../../icons/icon-chevron";

const Option: React.FC<TOptionProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={`pl-4 mr-1 py-2 cursor-pointer hover:bg-[#EBEBEB] flex items-center rounded ${
          isOpen && "bg-[#EBEBEB]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconChevron
          className={`mr-2  ${isOpen ? "rotate-180" : "rotate-360"}`}
        />
        <span className="text-gray-800">{label}</span>
      </div>
      {isOpen && (
        <div>
          {items.map((item, index) => (
            <Item key={index} label={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Option;
