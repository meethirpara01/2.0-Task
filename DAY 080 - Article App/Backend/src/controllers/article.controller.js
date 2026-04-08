import dotenv from 'dotenv';
dotenv.config();
import articleModel from "../models/article.model.js";
import ImageKit from '@imagekit/nodejs';
import { toFile } from "@imagekit/nodejs";

console.log(process.env.IMAGEKIT_PRIVATE_KEY);

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

export async function createArticle(req, res) {

    const userId = req.user.id;

    console.log(req.body, req.file);
    
    // const { title, tag, description } = req.body;

    // const file = await imageKit.files.upload({
    //     file: await toFile(Buffer.from(req.file.buffer), 'file'),
    //     fileName: "TEST",
    //     folder: "ArticleAPP"
    // })

    // const article = await articleModel.create({
    //     userId: userId,
    //     title: req.body.title, 
    //     tag: req.body.tag, 
    //     imageUrl: file.url, 
    //     description: req.body.description
    // })

    // return res.status(201).json({
    //     message: "Article created Successfully",
    //     article
    // })
}