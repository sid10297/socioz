import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { validateSignup } from "../helpers/validateSignup";
import { InlineError } from "../components/InlineError";
import { useState } from "react";
import { APP_TITLE } from "../constants";

const Signup = () => {
  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const username = e.currentTarget.username.value;
    const firstName = e.currentTarget.firstName.value;
    const lastName = e.currentTarget.lastName.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;

    const isValid = validateSignup({
      email,
      password,
      username,
      firstName,
      lastName,
      confirmPassword,
    });

    if (isValid !== true) {
      setErrors((prev) => ({ ...prev, [isValid.field]: isValid.message }));
      return;
    }

    setLoading(true);
    try {
      await signup({ email, password, username, firstName, lastName });
    } catch (error) {
      console.error("error: ", error);
    } finally {
      setLoading(false);
    }

    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold mb-4 text-slate-400">{APP_TITLE}</p>
      <form className="w-1/2 flex flex-col gap-2" onSubmit={handleSignup}>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {errors.firstName && <InlineError message={errors.firstName} />}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {errors.lastName && <InlineError message={errors.lastName} />}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        {errors.email && <InlineError message={errors.email} />}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Username"
          name="username"
        />
        {errors.username && <InlineError message={errors.username} />}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Password"
          name="password"
        />
        {errors.password && <InlineError message={errors.password} />}
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <InlineError message={errors.confirmPassword} />
        )}

        <button
          className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
        <Link
          to="/signin"
          className="text-blue-500 text-sm text-center hover:underline"
        >
          Already have an account? Signin
        </Link>
      </form>
    </div>
  );
};

export default Signup;
