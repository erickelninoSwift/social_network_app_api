import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tweetSchema: any = new Schema({
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
  fullName: {
    type: String,
    required: true,
    maxlength: 50,
  },
  bio: {
    type: String,
    maxlength: 160,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Tweets", tweetSchema);
