import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";

export const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};
