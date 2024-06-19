import express, { response } from "express";
import dotenv from "dotenv";
import http from "http";
import userRouter from "./routes/userRoutes";
dotenv.config();

const app = express();

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

app.get("/", (request, response) => {
  return response.send("<h1>Home</h1>");
});

app.use(userRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
