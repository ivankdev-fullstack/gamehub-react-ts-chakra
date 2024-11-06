import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDetailPage } from "./pages/GameDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/games",
    element: <Layout />,
    children: [{ path: ":id", element: <GameDetailPage /> }],
  },
]);
