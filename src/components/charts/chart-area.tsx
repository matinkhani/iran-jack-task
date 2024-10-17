import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FC } from "react";
import { TChartAreaDataProps } from "./chart.type";

const renderCustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="flex space-x-4 mt-4">
      {payload.map((entry: any, index: number) => (
        <li
          key={`item-${index}`}
          className="flex items-center text-[#424242] text-xs"
        >
          <div
            className="w-[10px] h-[10px] rounded-sm mr-2"
            style={{ backgroundColor: entry.color }}
          ></div>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const ChartArea: FC<TChartAreaDataProps> = ({ data }) => {
  const ticks = [0, 20000, 40000, 60000, 80000, 100000];

  return (
    <div className="w-fit min-w-[326px] md:w-[455px] h-60">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis dataKey="name" interval={0}>
            <Label value={"xAxisLabel"} offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) =>
              value === 0 ? value : `${value / 1000}K`
            }
            domain={[0, 100000]}
            ticks={ticks}
            interval={0}
          >
            <Label
              value={"yAxisLabel"}
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="left"
            content={renderCustomLegend} // Custom legend
            //   wrapperStyle={{ marginTop: 10 }} // Adjust margin
          />
          <Area dataKey="uv" stroke="#B146C2" fill="#b278bb" name="Line 1" />
          <Area dataKey="pv" stroke="#00B7C3" fill="#80bcc0" name="Line 2" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartArea;
