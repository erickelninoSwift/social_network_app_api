import express, { Router } from "express";
import { handleValidationRegistration } from "../middleware/registerValidation";
import { handleCheckUserExst } from "../middleware/checkUserExist";
import {
  getAllusersController,
  registerUserController,
  getuserController,
  deleteUserController,
  handleUpdacteuserdetails,
} from "../controllers/usersControllers";

const router: Router = express.Router();

// get All users
router.get("/", getAllusersController);

// get one user
router.get("/:id", getuserController);

//  register user
router.post(
  "/",
  handleValidationRegistration,
  handleCheckUserExst,
  registerUserController
);

// ddelete the user

router.delete("/:id", deleteUserController);

// Update specific user details

router.put("/:id", handleUpdacteuserdetails);

export default router;
