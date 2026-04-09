import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:5173"
    ]
}))

import authRoute from './routes/user.routes.js';
app.use("/api/auth", authRoute);

import articleRoute from './routes/article.routes.js';
app.use("/api/article", articleRoute);

export default app;