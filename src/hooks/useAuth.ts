import { User } from "@supabase/supabase-js";

import { SigninParams, SignupParams } from "../types/auth";
import { supabase } from "../lib/supabase";

export const useAuth = (setUser: (user: User | null) => void) => {
  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw new Error(error.message);
    }

    setUser(session?.user ?? null);
  };

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

  return { signup, signInWithEmail, signOut, getSession };
};
