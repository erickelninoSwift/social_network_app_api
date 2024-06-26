import express from "express";
import dotenv from "dotenv";
import http from "http";
import userRouter from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import AuthRoute from "./routes/AuthRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToMongo } from "./connect/database";
dotenv.config();

const app = express();

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

app.get("/", (request: express.Request, response: express.Response) => {
  return response.send("<h1>Welcome to our App</h1>");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Users endpoint
// =============================
app.use("/users", userRouter);
app.use("/auth", AuthRoute);
// ==============================
// Tweets endpoints

app.use("/tweets", tweetRoutes);

// ==========================

server.listen(process.env.PORT, () => {
  connectToMongo();
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
