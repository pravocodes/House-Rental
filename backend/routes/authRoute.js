import express from "express";
import { registerController, storage } from "../controller/authController.js";
import multer from "multer";

const upload = multer({ storage: storage });
const router = express.Router();

router.post("/register", upload.single("profileImage"), registerController);

export default router;
