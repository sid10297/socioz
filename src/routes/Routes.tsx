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
      path: "/login",
      element: <div>Login</div>,
    },
    {
      path: "/signup",
      element: <div>Signup</div>,
    },
  ]);

  return routes;
};
