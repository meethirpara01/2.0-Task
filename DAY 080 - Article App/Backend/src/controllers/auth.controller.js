import dotenv from 'dotenv';
dotenv.config();
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import ImageKit from '@imagekit/nodejs';
import { toFile } from "@imagekit/nodejs";

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

export async function register(req, res) {

    const { username, name, email, password } = req.body;

    const file = await imageKit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "TEST",
        folder: "ArticleAPP/ProfilePic"
    })

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "User Already exist with this email or password",
            success: false,
            err: "User Already Exist"
        })
    }

    const user = await userModel.create({
        username,
        name,
        email,
        imageUrl: file.url,
        password
    })

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECERT, { expiresIn: "7d" })

    res.cookie("JWT_TOKEN", token)

    res.status(201).json({
        message: "User register successfully",
        user: {
            username: user.username,
            email: user.email,
            name: user.name,
            imageUrl: user.imageUrl,
        },
        token
    })
}


export async function login(req, res) {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(404).json({
            message: "User Not Found",
            success: false,
            err: "User Not Exist"
        })
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(404).json({
            message: 'Invalid email or password',
            success: false,
            err: "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECERT, { expiresIn: "7d" })

    res.cookie("JWT_TOKEN", token)

    res.status(200).json({
        message: "User login successfully",
        user: {
            username: user.username,
            email: user.email,
            name: user.name,
            imageUrl: user.imageUrl,
        },
        token
    })
}

export async function getMe(req, res) {

    const id = req.user.id;

    const user = await userModel.findById(id)

    if (!user) {
        return res.status(404).json({
            message: "User Not Found",
            success: false,
            err: "User Not Exist"
        })
    }

    res.status(200).json({
        message: "User featch successfully",
        user: {
            username: user.username,
            email: user.email,
            name: user.name,
            imageUrl: user.imageUrl,
        }
    })

}