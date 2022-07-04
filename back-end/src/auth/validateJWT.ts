import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Response } from 'express';
import userModel from '../model/UserModel';
import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';
dotenv.config();

const secret: string | undefined = process.env.JWT_SECRET;

const validateToken = async (req: IRequestWithAdmin, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, secret as string) as JwtPayload;
        const user = await userModel.getByEmail(decoded.data);
        if (!user.length) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        req.id = user[0].id;
        req.admin = user[0].admin;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

export default validateToken;