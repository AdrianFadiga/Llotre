import { NextFunction, Response } from 'express';
import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';
import ITask from '../interfaces/ITask';
import tasksService from '../service/TasksService';

export default {
    async getByUserId(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const { userId } = req;
            const tasks = await tasksService.getByUserId(userId as number);
            return res.status(200).json(tasks);
        } catch(err) {
            next(err);
        }
    },

    async addNewTask(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const { admin } = req;
            const { userId, title, task } = req.body;
            await tasksService.addNewTask(admin as number, {userId, title, task});
            return res.status(201).send();            
        } catch(err) {
            next(err);
        }
    },

    async editTaskStatus(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const {admin, userId} = req;
            const {taskId, taskStatus} = req.body; 
            await tasksService.editTaskStatus({admin, userId} as IRequestWithAdmin, {taskId, taskStatus} as ITask);
            return res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
};