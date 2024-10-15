import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-[#5B5FC7] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <Link to="/">
        <button className="px-6 py-3 bg-[#5B5FC7] text-white rounded-md hover:bg-[#4A4FB5] transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
