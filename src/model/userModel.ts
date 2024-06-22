import mongoose from "mongoose";
import { tweetSchema } from "./tweetModel";
interface IUser {
  username: String;
  email: String;
  password: String;
  fullname: String;
  bio: String;
  avatar: String;
  createdAt: Date;
  isVerified: false;
  tweetsId: String[];
}
const user = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    fullname: {
      type: String,
      required: true,
      maxlength: 50,
    },
    bio: {
      type: String,
      maxlength: 160,
    },
    avatar: {
      type: String,
      default: "default_avatar.jpg",
    },
    isVerified: { type: Boolean, default: false },
    tweetsId: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", user);
