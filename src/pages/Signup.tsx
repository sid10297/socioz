import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Signup = () => {
  const { signup } = useAuthContext();

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const username = e.currentTarget.username.value;
    const firstName = e.currentTarget.firstName.value;
    const lastName = e.currentTarget.lastName.value;
    const confirmPassword = e.currentTarget.confirmPassword.value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    await signup({ email, password, username, firstName, lastName });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold mb-4">Socioz</p>
      <form className="flex flex-col gap-2" onSubmit={handleSignin}>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="First Name"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Username"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Password"
        />
        <input
          className="border border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
          Signup
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
