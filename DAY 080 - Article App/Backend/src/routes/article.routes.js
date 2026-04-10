import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { createArticle, uploadImage } from "../controllers/article.controller.js"
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const articleRoute = Router();

articleRoute.post("/create", upload.single("image"), authUser, createArticle);

articleRoute.post("/upload-image", upload.single("image"), authUser, uploadImage);

export default articleRoute;