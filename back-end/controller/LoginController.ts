import { Request, Response } from 'express';
import {loginService} from '../service/LoginService';

const userLogin = async (req: Request, response: Response) => {
    loginService.userLogin();
};

export {userLogin};