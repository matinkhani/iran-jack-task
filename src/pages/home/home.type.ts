import { ReactNode } from "react";

export type ChartCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export type TChartBarData = {
  month: string;
  value: number;
};
