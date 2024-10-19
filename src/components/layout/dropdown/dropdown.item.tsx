import { TItemProps } from "./dropdown.type";

const Item: React.FC<TItemProps> = ({ label }) => {
  return (
    <div className="pl-8 py-1 cursor-pointer">
      <span className="text-gray-700 hover:underline">{label}</span>
    </div>
  );
};

export default Item;
