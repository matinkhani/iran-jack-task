import HomeDropDown from "./components/home-drop-down";
import HomeFilter from "./components/home-filter";
import HomeView from "./components/home-view";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <HomeFilter />
      <div className="flex">
        <HomeDropDown />
        <HomeView />
      </div>
    </div>
  );
};

export default Home;
