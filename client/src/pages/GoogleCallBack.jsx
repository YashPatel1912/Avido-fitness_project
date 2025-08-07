import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/token";

import { toast } from "react-toastify";

export const GoogleCallBack = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const parms = new URLSearchParams(window.location.search);

    const code = parms.get("code");
    const state = parms.get("state");

    if (code && state) {
      const callBack = async () => {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/google/callback/`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, state }),
        });

        const data = await response.json();

        if (!response.ok) {
          if (data.error === "Set not password") {
            toast.error(data.error);
            navigate(data.redirect, { state: data.data });
          }
          if (data.errors) {
            navigate("/login");
            toast.error("Server error:", data);
          }
        } else {
          setIsLoggedIn(true);
          toast.success(data.message);
          navigate("/");
        }
      };

      callBack();
    }
  }, []);

  return;
};
