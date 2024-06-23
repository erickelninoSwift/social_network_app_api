import express, { Router } from "express";
import { handleValidationRegistration } from "../middleware/registerValidation";
import {
  getAllusersController,
  registerUserController,
  getuserController,
  deleteUserController,
  handleUpdateuserdetail,
} from "../controllers/usersControllers";

const router: Router = express.Router();

// get All users
router.get("/", getAllusersController);

// get one user
router.get("/:id", getuserController);

//  register user
router.post("/", handleValidationRegistration, registerUserController);

// ddelete the user

router.delete("/:id", deleteUserController);

// Update specific user details

router.put("/:id", handleUpdateuserdetail);

export default router;
