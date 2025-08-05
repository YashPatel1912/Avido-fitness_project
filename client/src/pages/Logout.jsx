import { useEffect } from "react";
import { useAuth } from "../store/token";
import { useNavigate } from "react-router-dom";

import { useRef } from "react";

import { toast } from "react-toastify";

export const Logout = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const logoutUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/logout/", {
          method: "POST",
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          navigate("/login");
          toast.success("user logout");
          setIsLoggedIn(false);
        }
      } catch (error) {
        toast.error(error);
      }
    };

    logoutUser();
  }, [setIsLoggedIn, navigate]);

  return null;
};
