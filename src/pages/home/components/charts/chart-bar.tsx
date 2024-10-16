import { ChartBarData } from "../../home.data";
import ChartCard from "./chart-card";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const ChartBar = () => {
  return (
    <ChartCard title="Chart 1" description="Description for chart 1">
      <div className="w-[326px] md:w-60 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ChartBarData}
            margin={{
              top: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis
              dataKey="name"
              domain={["Jan", "Jun"]}
              ticks={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
              interval={0}
            >
              <Label
                value="X-axis title"
                offset={-20}
                position="insideBottom"
              />
            </XAxis>
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                value === 0 ? value : `${value / 1000}K`
              }
              domain={[0, 100000]}
              ticks={[0, 20000, 40000, 60000, 80000, 100000]}
              interval={0}
            >
              <Label
                value="Y-axis title"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip />
            <Bar
              dataKey="uv"
              fill="#00B7C3"
              activeBar={<Rectangle fill="#005B70" stroke="#A6E9ED" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};

export default ChartBar;
