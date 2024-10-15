import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/layout";
import Home from "../../pages/home/home";
import Timeline from "../../pages/timeline/timeline";
import Chat from "../../pages/chat/chat";
import NotFound from "../../pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
