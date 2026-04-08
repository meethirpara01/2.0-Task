import { Router } from 'express';
import { register, login, getMe } from '../controllers/auth.controller.js'
import { authUser } from '../middlewares/auth.middleware.js';

const authRoute = Router();

authRoute.post("/register", register)

authRoute.post("/login", login)

authRoute.get("/get-me", authUser, getMe)

export default authRoute