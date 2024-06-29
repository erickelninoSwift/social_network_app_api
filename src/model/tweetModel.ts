import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const tweetSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxlength: 280,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tweets", tweetSchema);
