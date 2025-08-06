import express from "express";
import cors from "cors";
import session from "express-session";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import reqestIp from "request-ip";
import { authRoute } from "./router/authRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import {
  membershipPlanCheck,
  verifyAuthentiocationUser,
} from "./middleware/authmiddleware.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL.split(","),
    credentials: true,
  })
);

app.use(
  session({
    secret: "validation",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend
const clientDistPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));

app.use(verifyAuthentiocationUser);
app.use(membershipPlanCheck);
app.use((req, res, next) => {
  res.locals.user = req.user;
  return next();
});

app.use(reqestIp.mw());

// All remaining routes go to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

app.use("/", authRoute);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
