import { User } from "@supabase/supabase-js";

export type SignupParams = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type SigninParams = {
  email: string;
  password: string;
};

export type AuthContextType = {
  user: User | null;
  signup: (data: {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
  }) => Promise<void>;
  signInWithEmail: (data: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
};
