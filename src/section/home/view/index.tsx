import ChartBar from "../../../components/charts/chart-bar";
import ChartPiePercent from "../../../components/charts/chart-pie-percent";
import { ChartBarData } from "../home.data";

// TODO: make imports with @ alias

const HomeView = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap p-2 mb-20 md:mb-0">
      <ChartBar
        data={ChartBarData}
        xAxisLabel="X-axis title"
        yAxisLabel="Y-axis title"
      />
      <ChartPiePercent />
    </div>
  );
};

export default HomeView;
