import express from "express";

export const handleValidationRegistration = async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  const { username, email, password, fullname, bio, avatar } = request.body;
  if (!username || !email || !password || !fullname || !bio) {
    return response.status(401).json({
      error: "please make sure you have all the field filled",
    });
  }

  next();
};
