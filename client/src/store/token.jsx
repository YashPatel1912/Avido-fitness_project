/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

export const UserContext = createContext();

const stripepromise = loadStripe(import.meta.env.STRIPE_API_KEY);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState([]);
  const [memebership, setMemberShip] = useState();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/check-auth", {
          credentials: "include",
        });

        const data = await response.json();

        if (data.user && response.ok) {
          setIsLoggedIn(true);
          setUser(data.user);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        toast.error(error);
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const checkoutPayment = async ({ fullName }) => {
    const stripeKey = await stripepromise;

    try {
      const response = await fetch("http://localhost:3000/check-out", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memebership),
      });
      const session = await response.json();

      if (!response.ok || !session?.id) {
        toast.error("Failed to create Stripe session:");
        return;
      }

      const res = await fetch("http://localhost:3000/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          paymentId: session.id,
          fullName: fullName,
        }),
      });

      const data = await res.json();

      if (!res) {
        console.log("not payment id ", data);
      }

      const stripe = await stripeKey;
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        toast.error(result.error.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        setMemberShip,
        memebership,
        user,
        setUser,
        checkoutPayment,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(UserContext);
  return AuthContextValue;
};

