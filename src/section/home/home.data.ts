import {
  TChartAreaDataProps,
  TChartData,
  TChartMultipleBarDataProps,
  TChartPieDataProps,
  TChartPieFullDataProps,
} from "../../components/charts/chart.type";

export const TimeRanges = [
  { label: "7 Days", value: 7 },
  { label: "30 Days", value: 30 },
  { label: "60 Days", value: 60 },
];

export const ChartPieDataByTimeRange: Record<number, TChartPieDataProps> = {
  7: { data: { value: 40 } },
  30: { data: { value: 55 } },
  60: { data: { value: 70 } },
};

export const ChartBarData: TChartData[] = [
  {
    key: "Jan",
    value: 70000,
  },
  {
    key: "Feb",
    value: 80000,
  },
  {
    key: "Mar",
    value: 63000,
  },
  {
    key: "Apr",
    value: 72000,
  },
  {
    key: "May",
    value: 63000,
  },
  {
    key: "Jun",
    value: 92000,
  },
];

export const ChartAreaData7 = [
  {
    name: "Jan",
    uv: 60000,
    pv: 50000,
  },
  {
    name: "Feb",
    uv: 99000,
    pv: 58000,
  },
  {
    name: "Mar",
    uv: 80000,
    pv: 40000,
  },
  {
    name: "Apr",
    uv: 20000,
    pv: 48000,
  },
  {
    name: "May",
    uv: 80000,
    pv: 53000,
  },
  {
    name: "Jun",
    uv: 3000,
    pv: 70000,
  },
];

export const ChartAreaData30 = [
  {
    name: "Jan",
    uv: 90000,
    pv: 5000,
  },
  {
    name: "Feb",
    uv: 20000,
    pv: 23000,
  },
  {
    name: "Mar",
    uv: 80000,
    pv: 40000,
  },
  {
    name: "Apr",
    uv: 60000,
    pv: 12000,
  },
  {
    name: "May",
    uv: 80000,
    pv: 62000,
  },
  {
    name: "Jun",
    uv: 9000,
    pv: 40000,
  },
];

export const ChartAreaData60 = [
  {
    name: "Jan",
    uv: 70000,
    pv: 30000,
  },
  {
    name: "Feb",
    uv: 2000,
    pv: 50000,
  },
  {
    name: "Mar",
    uv: 30000,
    pv: 90000,
  },
  {
    name: "Apr",
    uv: 10000,
    pv: 78000,
  },
  {
    name: "May",
    uv: 20000,
    pv: 43000,
  },
  {
    name: "Jun",
    uv: 1000,
    pv: 50000,
  },
];

export const ChartAreaDataByTimeRange: Record<number, TChartAreaDataProps> = {
  7: { data: ChartAreaData7 },
  30: { data: ChartAreaData30 },
  60: { data: ChartAreaData60 },
};

export const ChartRadialAreaData = [
  {
    uv: 18,
    fill: "#555555",
  },
  {
    uv: 26,
    fill: "#2563EB",
  },
  {
    uv: 31,
    fill: "#3B82F6",
  },
  {
    uv: 35.22,
    fill: "#AAAAAA",
  },
  {
    uv: 45.63,
    fill: "#60A5FA",
  },
  {
    uv: 51.63,
    fill: "#1E3A8A",
  },
];

export const ChartPieFullData7 = [
  { key: "Group A", value: 400 },
  { key: "Group B", value: 500 },
  { key: "Group C", value: 200 },
  { key: "Group D", value: 300 },
];

export const ChartPieFullData30 = [
  { key: "Group A", value: 250 },
  { key: "Group B", value: 100 },
  { key: "Group C", value: 700 },
  { key: "Group D", value: 200 },
];

export const ChartPieFullData60 = [
  { key: "Group A", value: 200 },
  { key: "Group B", value: 300 },
  { key: "Group C", value: 800 },
  { key: "Group D", value: 50 },
];

export const ChartPieFullDataByTimeRange: Record<
  number,
  TChartPieFullDataProps
> = {
  7: { data: ChartPieFullData7 },
  30: { data: ChartPieFullData30 },
  60: { data: ChartPieFullData60 },
};

export const ChartBarMultipleData7 = [
  {
    name: "XS",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "S",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "M",
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: "L",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "XL",
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: "XXL",
    uv: 23,
    pv: 38,
    amt: 25,
  },
];

export const ChartBarMultipleData30 = [
  {
    name: "XS",
    uv: 10,
    pv: 80,
    amt: 5,
  },
  {
    name: "S",
    uv: 70,
    pv: 2,
    amt: 90,
  },
  {
    name: "M",
    uv: 30,
    pv: 40,
    amt: 34,
  },
  {
    name: "L",
    uv: 40,
    pv: 10,
    amt: 80,
  },
  {
    name: "XL",
    uv: 74,
    pv: 26,
    amt: 95,
  },
  {
    name: "XXL",
    uv: 10,
    pv: 20,
    amt: 30,
  },
];

export const ChartBarMultipleData60 = [
  {
    name: "XS",
    uv: 10,
    pv: 50,
    amt: 100,
  },
  {
    name: "S",
    uv: 100,
    pv: 50,
    amt: 10,
  },
  {
    name: "M",
    uv: 10,
    pv: 50,
    amt: 100,
  },
  {
    name: "L",
    uv: 100,
    pv: 50,
    amt: 10,
  },
  {
    name: "XL",
    uv: 10,
    pv: 50,
    amt: 100,
  },
  {
    name: "XXL",
    uv: 100,
    pv: 50,
    amt: 10,
  },
];

export const ChartMultipleBarData: Record<number, TChartMultipleBarDataProps> =
  {
    7: { data: ChartBarMultipleData7 },
    30: { data: ChartBarMultipleData30 },
    60: { data: ChartBarMultipleData60 },
  };
