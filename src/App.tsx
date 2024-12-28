import { AuthProvider } from "./contexts/AuthProvider";
import { Routes } from "./routes/Routes";

const App = () => {
  return (
    <div className="bg-gray-100">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
