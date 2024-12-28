import { User } from "@supabase/supabase-js";

import { createClient } from "@supabase/supabase-js";
import { SigninParams, SignupParams } from "../types/auth";

export const useAuth = (setUser: (user: User | null) => void) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  const signup = async ({
    email,
    password,
    username,
    firstName,
    lastName,
  }: SignupParams) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
          firstName: firstName,
          lastName: lastName,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    setUser(data.user);
  };

  const signInWithEmail = async ({ email, password }: SigninParams) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    setUser(data.user);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    setUser(null);
  };

  return { signup, signInWithEmail, signOut };
};
