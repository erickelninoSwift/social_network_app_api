import userModel from "../model/userModel";
import express from "express";
import { hashPassWord } from "../utils/utils";
export const getAllusersController = async (
  request: express.Request,
  response: express.Response
) => {
  try {
    const alluser = await userModel.find({}, { password: 0 });
    if (!alluser) {
      return response.status(200).json({
        status: "success",
        data: "no record found",
      });
    }

    return response.status(201).json({
      status: "success",
      data: alluser,
    });
  } catch (error) {
    return response.status(500).json({});
  }
};

export const registerUserController = async (
  request: express.Request,
  response: express.Response
) => {
  const { username, email, password, fullname, bio, avatar, tweetsId } =
    request.body;
  try {
    const findUser = await userModel.findOne({ email: email });

    if (findUser) {
      return response.json({
        message: `User with email : ${email} already exist in the database`,
      });
    }

    const passwordHashed = hashPassWord(password);
    const registeruser = new userModel({
      username,
      email,
      password: passwordHashed,
      fullname,
      bio,
      avatar,
      tweetsId,
    });

    const user = await registeruser.save();

    if (!user) {
      return response.status(400).json({
        status: "failed",
        message: "failed to save user",
      });
    }

    return response.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    return response.status(501).json({
      error: " Server Error ",
    });
  }
};

// get unique user

export const getuserController = async (
  request: express.Request,
  response: express.Response
) => {
  const { id } = request.params;
  try {
    const user = await userModel.find({
      _id: id,
    });
    if (!user) {
      return response.status(404).json({
        message: "user not found",
      });
    }

    return response.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    return response.json(error);
  }
};

export const deleteUserController = async (
  request: express.Request,
  response: express.Response
) => {
  const { id } = request.params;

  try {
    const deleteUser = await userModel.findOneAndDelete({
      _id: id,
    });
    if (!deleteUser) {
      response.json({
        message: "failed to delete",
      });
    }

    return response.status(201).json({
      userdeleted: deleteUser,
    });
  } catch (error) {
    return response.status(403).json({
      error,
    });
  }
};

export const handleUpdacteuserdetails = async (
  request: express.Request,
  response: express.Response
) => {
  const { id } = request.params;
  const { mybio, myname, image } = request.body;

  try {
    const findUsertoUpdate = await userModel.findOne({ _id: id });
    if (!findUsertoUpdate) {
      return response.status(404).json({
        message: "the user you are trying to update does not exist",
      });
    }

    if (mybio != undefined) {
      findUsertoUpdate.bio = mybio;
    }

    if (myname !== undefined) {
      findUsertoUpdate.username = myname;
    }

    if (image !== undefined) {
      findUsertoUpdate.avatar = image;
    }
    await findUsertoUpdate.save();

    return response.status(200).json({
      findUsertoUpdate,
    });
  } catch (error) {
    return response.json({
      error,
    });
  }
};
