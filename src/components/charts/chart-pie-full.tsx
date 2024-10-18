import { FC } from "react";
import { TChartPieFullDataProps } from "./chart.type";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#A6E9ED", "#00666D", "#005B70", "#00B7C3"];

const ChartPieFull: FC<TChartPieFullDataProps> = ({ data }) => {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <div className="w-fit min-w-[326px] md:w-[250px] h-60 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={85}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-gray-800">
        {totalValue}
      </div>
    </div>
  );
};

export default ChartPieFull;
