import express from "express";
import userModel from "../model/userModel";

export const handleCheckUserExst = async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  const { username, password } = request.body;
  try {
    if (!username || !password) {
      return response.json({
        messsage:
          " please make sure you have provided everything email/password",
      });
    }
    const findUser = await userModel.findOne({ email: username });
    if (findUser) {
      return response.status(200).json({
        message:
          "user with this email already exist , please try another email",
      });
    }

    if (!findUser) {
      next();
    }
  } catch (err) {
    return response.status(500).json({
      status: "error found" + err.message,
    });
  }
};
