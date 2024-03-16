import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoutes = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <p>Loading user data...</p>;
  return <div>{user ? <Outlet /> : <Navigate to='/login' />}</div>;
};

export default PrivateRoutes;
