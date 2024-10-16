import { useState } from "react";
import { TChartPieDataProps } from "../../components/charts/chart.type";
import ChartPiePercent from "../../components/charts/chart-pie-percent";
import ChartCard from "../../components/charts/chart-card";

const timeRanges = [
  { label: "7 Days", value: 7 },
  { label: "30 Days", value: 30 },
  { label: "60 Days", value: 60 },
];

const dataByTimeRange: Record<number, TChartPieDataProps> = {
  7: { data: { value: 40 } },
  30: { data: { value: 55 } },
  60: { data: { value: 70 } },
};

const TimeRangePieCharts = () => {
  const [selectedRange, setSelectedRange] = useState<number>(7);

  const handleTabClick = (range: number) => {
    setSelectedRange(range);
  };

  return (
    <ChartCard title="Chart 2" description="Description for chart 2">
      <div className="flex w-full justify-center gap-2 mb-10 -m-4">
        {timeRanges.map((range) => (
          <div
            key={range.value}
            className={`p-2 border-b-2 border-b-transparent cursor-pointer ${
              selectedRange === range.value
                ? "border-b-[#00B7C3] md:border-b-[#5B5FC7]"
                : ""
            }`}
            onClick={() => handleTabClick(range.value)}
          >
            {range.label}
          </div>
        ))}
      </div>

      <ChartPiePercent data={dataByTimeRange[selectedRange].data} />
    </ChartCard>
  );
};

export default TimeRangePieCharts;
