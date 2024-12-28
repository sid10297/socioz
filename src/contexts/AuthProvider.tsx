import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext";
import { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { signup, signInWithEmail, signOut } = useAuth(setUser);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signInWithEmail, signOut, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
