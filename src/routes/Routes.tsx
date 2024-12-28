import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

export const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <div>Hello world!</div>
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
