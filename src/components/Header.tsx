import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { APP_TITLE } from "../constants";

export default function Header() {
  const { signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignout = () => {
    try {
      signOut();
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{APP_TITLE}</p>
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
