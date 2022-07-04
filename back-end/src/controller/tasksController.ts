import { NextFunction, Response } from 'express';
import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';
import tasksService from '../service/TasksService';

export default {
    async getByUserId(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const { id } = req;
            const tasks = await tasksService.getByUserId(id as number);
            return res.status(200).json(tasks);
        } catch(err) {
            next(err);
        }
    }
};