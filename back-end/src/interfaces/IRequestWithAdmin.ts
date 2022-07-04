import { Request } from 'express';

interface IRequestWithAdmin extends Request {
    admin?: number
    id?: number
}

export default IRequestWithAdmin;