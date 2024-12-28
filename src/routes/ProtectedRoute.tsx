import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();
  console.log(user);
  if (!user) {
    return <Navigate to="/signin" />;
  } else {
    return <div>{children}</div>;
  }
};

export default ProtectedRoute;
