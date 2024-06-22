import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const tweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    userID: { type: String, required: true },
    user: { type: String, required: true },
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Tweets", tweetSchema);
