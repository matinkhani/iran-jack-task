import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes/routes";

function App() {
  return (
    <div className="overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
