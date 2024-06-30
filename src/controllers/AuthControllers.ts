import express from "express";
import userModel from "../model/userModel";
export const authUser = async (
  request: express.Request,
  response: express.Response
) => {
  const { email, password } = request.body;
  try {
    if (!email || !password) {
      return response.json({
        status: "failed",
        message: " please make sure that you provided email /password",
      });
    }
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return response.status(404).json({
        message: "user with this email is not found",
      });
    }
    console.log(findUser);

    return response.status(200).json({
      user: findUser,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};
