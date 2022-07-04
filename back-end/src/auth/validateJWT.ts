import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Response } from 'express';
import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';
dotenv.config();

const secret: string | undefined = process.env.JWT_SECRET;

const validateToken = async (req: IRequestWithAdmin, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const payload = jwt.verify(token, secret as string) as JwtPayload;
        req.email = payload.email;
        req.admin = payload.admin;
        req.userId = payload.id;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

export default validateToken;