import { ReactNode } from "react";

export type TChartBarDataProps = {
  data: TChartBarData[];
  xAxisLabel: string;
  yAxisLabel: string;
};

export type ChartCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export type TChartBarData = {
  key: string;
  value: number;
};
