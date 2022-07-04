import { Request } from 'express';

interface IRequestWithAdmin extends Request {
    admin?: number
    id?: number
    email?: string
}

export default IRequestWithAdmin;