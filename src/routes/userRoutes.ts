import express, { Router } from "express";

const router: Router = express.Router();

router.post(
  "/users",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      error: " not impelemented",
    });
  }
);

router.get("/user", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "No users",
  });
});

router.get(
  "/users/:id",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

router.put(
  "/users/:id",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

router.delete(
  "/users/:id",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

export default router;
