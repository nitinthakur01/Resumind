import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../contexts/AppContexts";

const ProtectedRoutes = () => {
  const { isAuth, loading } = useAppData();
  if (loading) return null;

  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;