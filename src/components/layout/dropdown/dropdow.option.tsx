import { useState } from "react";
import { TOptionProps } from "./dropdown.type";
import Item from "./dropdown.item";

const Option: React.FC<TOptionProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="pl-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`mr-2  ${isOpen ? "rotate-90" : "rotate-360"}`}>
          {">"}
        </span>
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
