import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.post("/", MyUserController.createCurrentUser);
// router.post("/", createCurrentUser);

export default router;
