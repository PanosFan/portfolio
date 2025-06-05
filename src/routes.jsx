import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";

const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

const RoutesProvider = () => <RouterProvider router={router} />;

export default RoutesProvider;
