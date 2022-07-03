import { NextFunction, Request, Response } from 'express';
import {loginService} from '../service/LoginService';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret: string | undefined = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256'
};

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body;
        await loginService.userLogin(email, password);
        const token = jwt.sign({data: email}, secret as string, jwtConfig as jwt.SignOptions);
        return res.status(200).json({token});
    } catch(err) {
        next(err);
    }
};

const loginController = {
    userLogin
};

export {loginController};