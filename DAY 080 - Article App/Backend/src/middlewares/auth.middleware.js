import jwt from 'jsonwebtoken';

export async function authUser(req, res, next) {

    const token = req.cookies.JWT_TOKEN;

    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.',
            success: false,
            err: "No Token Provided"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECERT)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid or expired token',
            success: false,
            err: error.message
        })
    }
}