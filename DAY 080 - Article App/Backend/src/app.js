import express, { json } from 'express'
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(cookieParser());

import authRoute from './routes/user.routes.js';
app.use("/api/auth", authRoute);

import articleRoute from './routes/article.routes.js';
app.use("/api/article", articleRoute);

export default app;