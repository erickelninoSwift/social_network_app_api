import express, { Router } from "express";

const router: Router = express.Router();

router.post("/", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    error: " not Tweet",
  });
});

router.get("/", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "No NTweets",
  });
});

router.get("/:id", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "no tweet found",
  });
});

router.put("/:id", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "no tweet found",
  });
});

router.delete(
  "/:id",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      data: "no tweet found",
    });
  }
);

export default router;
