import {
  TChartAreaDataProps,
  TChartData,
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
