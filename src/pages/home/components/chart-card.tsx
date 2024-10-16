import { FC } from "react";
import { ChartCardProps } from "../home.type";
import IconMore from "../../../components/icons/icon-more";

const ChartCard: FC<ChartCardProps> = ({ title, description, children }) => {
  return (
    <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-md flex flex-col md:m-3 mb-3 md:mb-0">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-">
          <p className="text-[#242424] text-sm font-bold">{title}</p>
          <p className="text-[#616161] text-xs font-normal hidden md:block">
            {description}
          </p>
        </div>
        <IconMore />
      </div>
      <div className="w-full mt-3 md:mt-5 flex items-center justify-center p-4">
        {children}
      </div>
      <p className="text-[#5B5FC7] text-sm font-semibold text-right md:text-left mt-6">
        View details
      </p>
    </div>
  );
};

export default ChartCard;
