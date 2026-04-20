import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import  adminRouter  from "./routes/admin.route.js";
import userRouter  from "./routes/user.route.js";
import  courseRouter  from "./routes/course.route.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configure CORS for both development and production
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Serve static files from client dist folder
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

// Fallback middleware to serve index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

function main() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Mongodb Connected!");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
}

main();
