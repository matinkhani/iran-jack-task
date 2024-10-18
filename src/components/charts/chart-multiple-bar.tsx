import { FC } from "react";
import { TChartMultipleBarDataProps } from "./chart.type";
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

const ChartMultipleBar: FC<TChartMultipleBarDataProps> = ({ data }) => {
  return (
    <div className="w-fit min-w-[326px] md:w-[471px] h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis dataKey="name">
            <Label value="xAxisLabel" offset={-20} position="insideBottom" />
          </XAxis>
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            interval={0}
            domain={[0, 100]}
          >
            <Label
              value="yAxisLabel"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Bar
            dataKey="uv"
            fill="#93C5FD"
            activeBar={<Rectangle fill="#005B70" stroke="#A6E9ED" />}
          />
          <Bar
            dataKey="pv"
            fill="#1D4ED8"
            activeBar={<Rectangle fill="#005B70" stroke="#A6E9ED" />}
          />
          <Bar
            dataKey="amt"
            fill="#888888"
            activeBar={<Rectangle fill="#005B70" stroke="#A6E9ED" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartMultipleBar;
