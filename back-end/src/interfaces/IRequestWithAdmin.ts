import { Request } from 'express';
import ReqPayload from '../types/ReqPayload';

interface IRequestWithAdmin extends Request {
    admin?: number
    userId?: number
    email?: string
    payload: ReqPayload;
}

export default IRequestWithAdmin;