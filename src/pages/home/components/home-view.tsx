import ChartBar from "./charts/chart-bar";

const HomeView = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap p-2">
      <ChartBar />
    </div>
  );
};

export default HomeView;
