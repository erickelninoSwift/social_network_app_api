import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const saltRounds: number = 5;

const salt: string = bcrypt.genSaltSync(saltRounds);

export const hashPassWord = (password: string): string => {
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (
  password: string,
  hashPassWord: string
): boolean => {
  return bcrypt.compareSync(password, hashPassWord);
};

export const createToken = (
  id: string,
  email: string,
  username: string
): string => {
  return jwt.sign(
    { id: id, email: email, username: username },
    process.env.PRIVATEKEY,
    {
      expiresIn: "3d",
    }
  );
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.PRIVATEKEY);
};
