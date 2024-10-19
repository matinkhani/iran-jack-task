import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import ChartCard from "./chart-card";
import { FC } from "react";
import { TChartPieDataProps } from "./chart.type";

// TODO: talk to chatgpt for name of this component

const COLORS = ["#00B7C3", "#D1D1D1"];

const ChartPiePercent: FC<TChartPieDataProps> = ({ data }) => {
  const { value } = data;

  if (value < 0 || value > 100) {
    return (
      <ChartCard title="Chart 2" description="Description for chart 2">
        <div className="w-full h-full flex items-center justify-center text-red-500">
          Error: The value must be between 0 and 100. Current value: {value}
        </div>
      </ChartCard>
    );
  }

  const remaining = 100 - value;

  const chartData = [
    { name: "Filled", value: value, color: COLORS[0] },
    { name: "Remaining", value: remaining, color: COLORS[1] },
  ];

  return (
    <div className="w-full md:w-60 h-48 flex flex-col items-center relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="hidden md:flex items-center gap-4 -mt-16">
        {chartData.map((item) => (
          <div className="flex items-center gap-1">
            <div
              style={{ backgroundColor: item.color }}
              className="h-[10px] w-[10px] rounded-sm"
            />
            <p className="text-xs text-[#424242]">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
        {value}%
      </div>
      {/* Display the labels and ranges */}
      <div className="flex justify-between w-10/12 -mt-28 md:-mt-[65px] text-xs font-semibold relative">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default ChartPiePercent;
