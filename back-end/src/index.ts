import dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import IResponseError from './interfaces/IResponseError';
import loginRouter from './routers/Login';

const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use('/', loginRouter);

app.use((err: IResponseError, _req: Request, res: Response, _next: NextFunction) => {
    if (err.status) return res.status(err.status).json({message: err.message});
    return res.status(500).json({message: err.message});
});

app.listen(port, () => console.log('o pai ta on na', port));