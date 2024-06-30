import express, { Router } from "express";
import {
  getAllTweets,
  createTweet,
  getTweetbyID,
  deleteTweetByID,
  updateTweet,
  getAllTweetsByUser,
} from "../controllers/tweetsControllers";
const router: Router = express.Router();

router.get("/", getAllTweets);
router.get("/", getAllTweetsByUser);
router.post("/", createTweet);
router.get("/:tweetid", getTweetbyID);
router.delete("/:id", deleteTweetByID);
router.put("/:id", updateTweet);

export default router;
