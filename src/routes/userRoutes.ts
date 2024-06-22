import express, { Router } from "express";

import {
  getAllusersController,
  registerUserController,
  getuserController,
} from "../controllers/usersControllers";

const router: Router = express.Router();

// get All users
router.get("/", getAllusersController);

// get one user
router.get("/:id", getuserController);

//  register user
router.post("/", registerUserController);

router.put("/:id", (request: express.Request, response: express.Response) => {
  return response.status(501).json({
    data: "no user found",
  });
});

router.delete(
  "/:id",
  (request: express.Request, response: express.Response) => {
    return response.status(501).json({
      data: "no user found",
    });
  }
);

export default router;
