import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "./chart-card";
import { FC } from "react";
import { TChartRadialBarData } from "./chart.type";

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="mr-28 mt-4 space-y-1">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center text-xs">
          <span
            style={{ backgroundColor: entry.color }}
            className="w-2 h-2 mr-1 inline-block"
          />
          <span>{`${entry.payload.uv}%`}</span>
        </li>
      ))}
    </ul>
  );
};

const ChartRadialBar: FC<TChartRadialBarData> = ({ data }) => {
  return (
    <ChartCard title="Chart 4" description="Description for chart 4">
      <div className="w-fit min-w-[326px] md:w-60 h-72 ">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
            startAngle={0}
            endAngle={-270}
            className="mx-auto"
          >
            <RadialBar background dataKey="uv" />
            <PolarAngleAxis
              tick={false}
              domain={[0, 100]}
              type="number"
              //   @ts-expect-error this prop works but isn't correct in TS types
              reversed
            />
            <Legend
              content={renderLegend}
              layout="vertical"
              align="right"
              verticalAlign="top"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};

export default ChartRadialBar;
