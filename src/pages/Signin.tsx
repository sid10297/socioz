import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { validateSignin } from "../helpers/validateSignin";
import { useState } from "react";
import { InlineError } from "../components/InlineError";
import { APP_TITLE } from "../constants";

const Signin = () => {
  const navigate = useNavigate();
  const { signInWithEmail } = useAuthContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const isValid = validateSignin({ email, password });

    if (isValid) {
      try {
        setLoading(true);
        await signInWithEmail({ email, password });
        navigate("/");
      } catch (_error) {
        console.error("error: ", _error);
        setError("Invalid email or password");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold mb-4 text-slate-400">{APP_TITLE}</p>
      <form className="w-1/2 flex flex-col gap-2" onSubmit={handleSignin}>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Password"
          name="password"
        />
        {error && <InlineError message={error} />}
        <button
          className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Signin"}
        </button>
        <Link
          to="/signup"
          className="text-blue-500 text-sm text-center hover:underline"
        >
          Don't have an account? Signup
        </Link>
      </form>
    </div>
  );
};

export default Signin;
