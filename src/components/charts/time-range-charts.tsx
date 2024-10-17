import { FC } from "react";
import ChartCard from "./chart-card";
import { TimeRanges } from "../../section/home/home.data";
import { TTimeRangeChartsProps } from "./chart.type";

const TimeRangeCharts: FC<TTimeRangeChartsProps> = ({
  children,
  name,
  changeRange,
  selectedRange,
}) => {
  return (
    <ChartCard title="Chart 2" description="Description for chart 2" key={name}>
      <div className="flex w-full justify-center gap-2 mb-10 -m-4">
        {TimeRanges.map((range) => (
          <div
            key={range.value}
            className={`p-2 border-b-2 border-b-transparent cursor-pointer ${
              selectedRange === range.value
                ? "border-b-[#00B7C3] md:border-b-[#5B5FC7]"
                : ""
            }`}
            onClick={() => changeRange(range.value)}
          >
            {range.label}
          </div>
        ))}
      </div>

      {children}
    </ChartCard>
  );
};

export default TimeRangeCharts;
