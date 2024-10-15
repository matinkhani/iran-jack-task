import { Link, useLocation } from "react-router-dom";
import { HeaderTabData } from "./header.data";

const Tabs = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="order-3 md:order-2 w-full mt-3 border-b border-b-gray-100 md:border-b-0">
      <div className="flex w-full">
        {HeaderTabData.map((item) => (
          <Link
            to={item.link}
            className="relative flex-1 md:flex-none md:px-4"
            key={item.id}
          >
            <div
              className={`text-center py-2 ${
                pathName === item.link && "border-b-2 border-b-[#5B5FC7]"
              }`}
            >
              {item.name}
            </div>
            <span
              className={` ${
                pathName === item.link &&
                "md:absolute hidden md:block bottom-0 left-0 right-0 h-[3px] bg-[#5B5FC7] rounded-tl-lg rounded-tr-lg"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
