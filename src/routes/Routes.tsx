import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
      element: <div>Signin</div>,
    },
    {
      path: "/signup",
      element: <div>Signup</div>,
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return routes;
};
