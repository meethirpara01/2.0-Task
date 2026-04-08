import { Router } from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { createArticle } from "../controllers/article.controller.js"
const articleRoute = Router();

articleRoute.post("/create", authUser, createArticle);

export default articleRoute;