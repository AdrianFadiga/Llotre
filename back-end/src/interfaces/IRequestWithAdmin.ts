import { Request } from 'express';

interface IRequestWithAdmin extends Request {
    admin?: number
    userId?: number
    email?: string
}

export default IRequestWithAdmin;