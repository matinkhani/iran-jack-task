import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout";
import NotFound from "../../pages/not-found";
import TimelinePage from "../../pages/timeline";
import ChatPage from "../../pages/chat";
import HomePage from "../../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
