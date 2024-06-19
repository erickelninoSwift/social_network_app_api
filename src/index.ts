import express from "express";
import dotenv from "dotenv";
import http from "http";
dotenv.config();

const app = express();

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

app.get("/", (request, response) => {
  return response.send("Hello world");
});
server.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
