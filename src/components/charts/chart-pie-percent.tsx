import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import ChartCard from "./chart-card";

// TODO: talk to chatgpt for name of this component

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F"];

const ChartPiePercent = () => {
  return (
    <ChartCard title="Chart 2" description="Description for chart 2">
      <div className="w-[326px] md:w-60 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};

export default ChartPiePercent;
