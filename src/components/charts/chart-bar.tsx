import { FC } from "react";
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
import { TChartBarDataProps } from "./chart.type";

const ChartBar: FC<TChartBarDataProps> = ({ data, xAxisLabel, yAxisLabel }) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  const ticks = Array.from(
    { length: Math.ceil(maxValue / 20000) + 1 },
    (_, i) => i * 20000
  );

  return (
    <ChartCard title="Chart 1" description="Description for chart 1">
      <div className="w-fit min-w-[326px] md:w-60 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="" vertical={false} />
            <XAxis dataKey="key" interval={0}>
              <Label value={xAxisLabel} offset={-20} position="insideBottom" />
            </XAxis>
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                value === 0 ? value : `${value / 1000}K`
              }
              domain={[0, maxValue]}
              ticks={ticks}
              interval={0}
            >
              <Label
                value={yAxisLabel}
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip />
            <Bar
              dataKey="value"
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
