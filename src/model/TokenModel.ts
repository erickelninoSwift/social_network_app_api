import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TokenSchema: mongoose.Schema = new Schema(
  {
    userID: {
      type: String,
      require: true,
      unique: true,
    },

    token: {
      type: String,
      require: true,
      unique: true,
    },
    emailToken: { type: String, unique: true },
    valid: { type: Boolean, default: true },
    expiration: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Token", TokenSchema);
