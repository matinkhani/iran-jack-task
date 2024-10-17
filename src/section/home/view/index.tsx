import { useState } from "react";
import ChartArea from "../../../components/charts/chart-area";
import ChartBar from "../../../components/charts/chart-bar";
import {
  ChartAreaDataByTimeRange,
  ChartBarData,
  ChartPieDataByTimeRange,
  ChartRadialAreaData,
} from "../home.data";
import TimeRangeCharts from "../../../components/charts/time-range-charts";
import ChartPiePercent from "../../../components/charts/chart-pie-percent";
import { TChartsWitTimeRange } from "../home.type";
import ChartRadialBar from "../../../components/charts/chart-radial-bar";

// TODO: make imports with @ alias

const HomeView = () => {
  const [selectedRanges, setSelectedRanges] = useState<
    Record<TChartsWitTimeRange, number>
  >({
    pieChart: 7,
    areaChart: 7,
  });

  const handleRangeChange = (chartName: string, range: number) => {
    setSelectedRanges((prev) => ({
      ...prev,
      [chartName]: range,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap p-2 mb-20 md:mb-0">
      <TimeRangeCharts
        selectedRange={selectedRanges.pieChart}
        changeRange={(range) => handleRangeChange("pieChart", range)}
        name="pie-chart"
      >
        <ChartPiePercent
          data={ChartPieDataByTimeRange[selectedRanges.pieChart].data}
        />
      </TimeRangeCharts>

      <ChartBar
        data={ChartBarData}
        xAxisLabel="X-axis title"
        yAxisLabel="Y-axis title"
      />

      <TimeRangeCharts
        selectedRange={selectedRanges.areaChart}
        changeRange={(range) => handleRangeChange("areaChart", range)}
        name="area-chart"
      >
        <ChartArea
          data={ChartAreaDataByTimeRange[selectedRanges.areaChart].data}
        />
      </TimeRangeCharts>

      <ChartRadialBar data={ChartRadialAreaData} />
    </div>
  );
};

export default HomeView;
