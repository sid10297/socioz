import { ProtectedLayout } from "./ProtectedLayout";
import ProtectedRoute from "../routes/ProtectedRoute";

export const withProtection = (component: React.ReactNode) => (
  <ProtectedRoute>
    <ProtectedLayout>{component}</ProtectedLayout>
  </ProtectedRoute>
);
