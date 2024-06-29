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
