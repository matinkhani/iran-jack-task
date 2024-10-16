import { ReactNode } from "react";

export type TChartBarDataProps = {
  data: TChartData[];
  xAxisLabel: string;
  yAxisLabel: string;
};

export type ChartCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export type TChartData = {
  key: string;
  value: number;
};

export type TChartPieDataProps = {
  data: {
    value: number;
  };
};
