import { useContext } from "react";
import { AuthContextType } from "../types/auth";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
