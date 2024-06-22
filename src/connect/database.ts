import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("connected to mongo");
    });
  } catch (error) {
    console.log(error.message);
  }
};
