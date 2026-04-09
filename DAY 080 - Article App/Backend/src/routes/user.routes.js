import { Router } from 'express';
import { register, login, getMe } from '../controllers/auth.controller.js'
import { authUser } from '../middlewares/auth.middleware.js';
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const authRoute = Router();

authRoute.post("/register", upload.single("image"), register)

authRoute.post("/login", login)

authRoute.get("/get-me", authUser, getMe)

export default authRoute