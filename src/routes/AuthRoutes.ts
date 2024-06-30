import express from "express";
import { authUser } from "../controllers/AuthControllers";
const router = express.Router();

router.get("/login", authUser);

export default router;
