import { NextFunction, Request, Response } from 'express';
import loginService from '../service/LoginService';


export default {
    async userLogin (req: Request, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body;
            const token = await loginService.userLogin(email, password);
            return res.status(200).json({token});
        } catch(err) {
            next(err);
        }
    }
};