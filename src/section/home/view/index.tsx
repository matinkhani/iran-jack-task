import { useState } from "react";
import ChartArea from "../../../components/charts/chart-area";
import ChartBar from "../../../components/charts/chart-bar";
import {
  ChartAreaDataByTimeRange,
  ChartBarData,
  ChartMultipleBarData,
  ChartPieDataByTimeRange,
  ChartPieFullDataByTimeRange,
  ChartRadialAreaData,
} from "../home.data";
import TimeRangeCharts from "../../../components/charts/time-range-charts";
import ChartPiePercent from "../../../components/charts/chart-pie-percent";
import { TChartsWitTimeRange } from "../home.type";
import ChartRadialBar from "../../../components/charts/chart-radial-bar";
import ChartPieFull from "../../../components/charts/chart-pie-full";
import ChartMultipleBar from "../../../components/charts/chart-multiple-bar";

// TODO: make imports with @ alias

const HomeView = () => {
  const [selectedRanges, setSelectedRanges] = useState<
    Record<TChartsWitTimeRange, number>
  >({
    pieChart: 7,
    areaChart: 7,
    pieChartFull: 7,
    multipleBarChart: 7,
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
        title="Chart 1"
        description="Description for chart 1"
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
        title="Chart 3"
        description="Description for chart 3"
      >
        <ChartArea
          data={ChartAreaDataByTimeRange[selectedRanges.areaChart].data}
        />
      </TimeRangeCharts>

      <ChartRadialBar data={ChartRadialAreaData} />

      <TimeRangeCharts
        selectedRange={selectedRanges.pieChartFull}
        changeRange={(range) => handleRangeChange("pieChartFull", range)}
        name="pieChartFull"
        title="Chart 5"
        description="Description for chart 5"
      >
        <ChartPieFull
          data={ChartPieFullDataByTimeRange[selectedRanges.pieChartFull].data}
        />
      </TimeRangeCharts>

      <TimeRangeCharts
        selectedRange={selectedRanges.multipleBarChart}
        changeRange={(range) => handleRangeChange("multipleBarChart", range)}
        name="multipleBarChart"
        title="Chart 6"
        description="Description for chart 6"
      >
        <ChartMultipleBar
          data={ChartMultipleBarData[selectedRanges.multipleBarChart].data}
        />
      </TimeRangeCharts>
    </div>
  );
};

export default HomeView;
