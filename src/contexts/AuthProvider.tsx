import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";
import { User } from "@supabase/supabase-js";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { signup, signInWithEmail, signOut } = useAuth(setUser);

  return (
    <AuthContext.Provider value={{ signup, signInWithEmail, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};
