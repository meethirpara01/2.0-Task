import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { createArticle } from "../controllers/article.controller.js"
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const articleRoute = Router();

articleRoute.post("/create", upload.single("image"), authUser, createArticle);

export default articleRoute;