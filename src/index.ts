import express, { response } from "express";
import dotenv from "dotenv";
import http from "http";
dotenv.config();

const app = express();

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(app);

app.get("/", (request, response) => {
  return response.send("<h1>Home</h1>");
});

app.post("/users", (request: express.Request, repsonse: express.Response) => {
  return response.status(501).json({
    error: " not impelemented",
  });
});

app.get("/user", (request: express.Request, repsonse: express.Response) => {
  return response.status(501).json({
    data: "No users",
  });
});

app.get(
  "/users/:id",
  (request: express.Request, repsonse: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

app.put(
  "/users/:id",
  (request: express.Request, repsonse: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

app.delete(
  "/users/:id",
  (request: express.Request, repsonse: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
