import tweetModel from "../model/tweetModel";
import express from "express";
import userModel from "../model/userModel";

export const getAllTweetsByUser = async (
  request: express.Request,
  response: express.Response
) => {
  const { user } = request.body;
  console.log(user);
  let query = {};
  let data = {};
  try {
    if (user !== undefined && user.length > 0) {
      query = { ...query, user: user };
    }

    const getAlltweets1 = await tweetModel.find(query);

    if (!getAlltweets1) {
      return response.status(200).json({
        message: "No record found",
      });
    }
    const getUserdetails = await userModel.findOne({ _id: user });
    if (!getUserdetails) {
      return response.status(404).json({});
    }

    if (getAlltweets1) {
      data = { ...getAlltweets1 };
    }

    if (getUserdetails) {
      data = { ...data, getUserdetails };
    }

    return response.status(201).json({
      status: "success",
      data,
    });
  } catch (error) {}
  return response.status(501).json({
    data: "No NTweets",
  });
};

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
    const tweetID = savedTweet._id;
    const usertoaddTwet = await userModel.findOne({ _id: user });
    if (!usertoaddTwet) {
      return response.status(404).json({
        message: "you need to be registered first",
      });
    }
    usertoaddTwet.tweetsId = [...usertoaddTwet.tweetsId, tweetID.toString()];

    await usertoaddTwet.save();
    // console.log(savedTweet);
    if (!savedTweet) {
      return response.json({
        message: "failed to register user",
      });
    }
    return response.status(200).json({
      status: "success",
      data: savedTweet,
      user: usertoaddTwet,
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

export const updateTweet = async (
  request: express.Request,
  response: express.Response
) => {
  const { id } = request.params;
  const { content, user } = request.body;

  try {
    const findTWeetToedit = await tweetModel.findOne({ _id: id });

    if (!findTWeetToedit) {
      return response.status(404).json({
        status: "failed",
        message: "tweet to update was not found ",
      });
    }

    if (user !== undefined && findTWeetToedit.user === user) {
      if (content != undefined) {
        findTWeetToedit.text = content;
      }
      await findTWeetToedit.save();

      return response.status(200).json({
        status: "Data updated",
        data: findTWeetToedit,
      });
    }

    return response.status(200).json({
      message: "we could not updated data please make sure id is correct",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
    });
  }
};
