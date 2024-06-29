import express, { Router } from "express";
import {
  getAllTweets,
  createTweet,
  getTweetbyID,
  deleteTweetByID,
  updateTweet,
} from "../controllers/tweetsControllers";
const router: Router = express.Router();

router.get("/", getAllTweets);
router.post("/", createTweet);
router.get("/:tweetid", getTweetbyID);
router.delete("/:id", deleteTweetByID);
router.patch("/:id", updateTweet);

export default router;
