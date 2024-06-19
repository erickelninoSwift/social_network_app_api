import express, { Router } from "express";

const router: Router = express.Router();

router.post("/", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    error: " not impelemented",
  });
});

router.get("/", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "No users",
  });
});

router.get("/:id", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "no user found",
  });
});

router.put("/:id", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "no user found",
  });
});

router.delete(
  "/:id",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

export default router;
