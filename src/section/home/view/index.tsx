import ChartBar from "../../../components/charts/chart-bar";
import { ChartBarData } from "../home.data";
import TimeRangePieCharts from "../time-range-pie-charts";

// TODO: make imports with @ alias

const HomeView = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap p-2 mb-20 md:mb-0">
      <TimeRangePieCharts />
      <ChartBar
        data={ChartBarData}
        xAxisLabel="X-axis title"
        yAxisLabel="Y-axis title"
      />
    </div>
  );
};

export default HomeView;
