import { FC } from "react";
import IconMore from "../icons/icon-more";
import { ChartCardProps } from "./chart.type";

const ChartCard: FC<ChartCardProps> = ({ title, description, children }) => {
  return (
    <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg flex flex-col md:m-3 mb-3 md:mb-0 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-">
          <p className="text-[#242424] text-sm font-bold">{title}</p>
          <p className="text-[#616161] text-xs font-normal hidden md:block">
            {description}
          </p>
        </div>
        <IconMore />
      </div>
      <div className="w-full mt-7 md:mt-5 flex flex-col items-center justify-center p-4">
        {children}
      </div>
      <p className="text-[#5B5FC7] text-sm font-semibold absolute right-4 md:left-4 bottom-4">
        View details
      </p>
    </div>
  );
};

export default ChartCard;
