import express, { response } from "express";
import dotenv from "dotenv";
import http from "http";
import userRouter from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";
import cors from "cors";
dotenv.config();

const app = express();

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

app.get("/", (request, response) => {
  return response.send("<h1>Welcome to our App</h1>");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// endpoints to get all ursers
// =============================
app.use("/users", userRouter);

// ==============================
// Tweets endpoints

app.use("/tweets", tweetRoutes);

// ==========================

server.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
