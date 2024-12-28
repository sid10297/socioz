import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Signin = () => {
  const { signInWithEmail } = useAuthContext();

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    await signInWithEmail({ email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold mb-4">Socioz</p>
      <form className="flex flex-col gap-2" onSubmit={handleSignin}>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
          Signin
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
