import { AuthProvider } from "./contexts/AuthProvider";
import { Routes } from "./routes/Routes";

const App = () => {
  return (
    <div>
      <p className="text-2xl font-bold">Socioz</p>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
