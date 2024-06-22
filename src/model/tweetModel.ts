import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface tweetuser {
  userId: String;
  username: String;
}

interface tweet {
  user: tweetuser;
}

export const tweetSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tweets", tweetSchema);
