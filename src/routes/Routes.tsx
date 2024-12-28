import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import { withProtection } from "../components/withProtection";
import { useAuthContext } from "../hooks/useAuthContext";
import { Loading } from "../components/Loading";

export const Routes = () => {
  const { user, loading } = useAuthContext();

  const routes = useRoutes([
    {
      path: "/",
      element: loading ? <Loading /> : withProtection(<Home />),
    },
    {
      path: "/signin",
      element: loading ? <Loading /> : user ? <Navigate to="/" /> : <Signin />,
    },
    {
      path: "/signup",
      element: loading ? <Loading /> : user ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};
