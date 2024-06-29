import express, { Router } from "express";
import { getAllTweets, createTweet } from "../controllers/tweetsControllers";
const router: Router = express.Router();

router.get("/", getAllTweets);
router.post("/", createTweet);

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
