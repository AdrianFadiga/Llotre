import { NextFunction, Request, Response } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email || !password) next({ status: 400, message: 'Some required fields are missing' });
    next();
};
  
export default validateLogin;