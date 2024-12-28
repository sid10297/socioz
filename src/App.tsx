import { AuthProvider } from "./contexts/AuthProvider";
import { Routes } from "./routes/Routes";

const App = () => {
  return (
    <div className="bg-gray-100 max-w-screen-lg mx-auto h-screen p-4">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
