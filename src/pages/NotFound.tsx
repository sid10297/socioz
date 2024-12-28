import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-3xl font-bold mb-4">404</p>
      <p className="text-xl">Page not found</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
