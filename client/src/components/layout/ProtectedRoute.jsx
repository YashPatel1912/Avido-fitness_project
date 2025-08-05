import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/token";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false) navigate("/register");
  }, [isLoggedIn, navigate]);

  if (isLoggedIn === null) {
    return <p>Loading...</p>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
