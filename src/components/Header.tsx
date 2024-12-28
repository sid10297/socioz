import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Header() {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignout = () => {
    try {
      signOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <p className="text-lg font-bold">Socioz</p>
        </div>
        <div>
          <button
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={handleSignout}
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
}
