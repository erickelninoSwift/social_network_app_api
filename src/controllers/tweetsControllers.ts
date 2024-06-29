import tweetModel from "../model/tweetModel";
import express from "express";

export const getAllTweets = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const getAlltweets1 = await tweetModel.find({});
    if (!getAlltweets1) {
      return response.status(200).json({
        message: "No record found",
      });
    }

    return response.status(201).json({
      status: "success",
      data: getAlltweets1,
    });
  } catch (error) {}
  return response.status(501).json({
    data: "No NTweets",
  });
};

export const createTweet = async (
  request: express.Request,
  response: express.Response
) => {
  const { user, text, likes } = request.body;

  try {
    const postTweet = new tweetModel({
      user,
      text,
      likes,
    });
    const savedTweet = await postTweet.save();

    if (!savedTweet) {
      return response.json({
        message: "failed to register user",
      });
    }
    return response.status(200).json({
      status: "success",
      data: savedTweet,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

export const getTweetbyID = async (
  request: express.Request,
  response: express.Response
) => {
  const { tweetid } = request.params;
  console.log(tweetid);
  try {
    const tweet = await tweetModel.findOne({ _id: tweetid });
    if (!tweet) {
      return response.status(404).json({
        message: `Tweet with ID: ${tweetid} was not found`,
      });
    }
    return response.status(200).json({
      status: "success",
      data: tweet,
    });
  } catch (error) {
    return response.json({
      message: error.message,
    });
  }
};

export const deleteTweetByID = async (
  request: express.Request,
  response: express.Response
) => {
  const { id } = request.params;
  try {
    const gettweet = await tweetModel.findOne({ _id: id });
    if (!gettweet) {
      return response.status(404).json({
        message: "tweet was not found",
      });
    }
    const deleteTweet = await tweetModel.findOneAndDelete({ _id: id });

    return response.status(201).json({
      status: "deleted",
      data: deleteTweet,
    });
  } catch (error) {
    return response.status(501).json({
      status: "node found",
      error: error.message,
    });
  }
};
