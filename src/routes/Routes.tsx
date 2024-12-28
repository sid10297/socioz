import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import { withProtection } from "../components/withProtection";

export const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: withProtection(<Home />),
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
