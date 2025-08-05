import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./store/token.jsx";

import { ToastContainer, Zoom } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Zoom}
      />
    </StrictMode>
  </UserProvider>
);
