import { NextFunction, Response } from 'express';
import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';
import tasksService from '../service/TasksService';
import Task from '../types/Task';
import User from '../types/User';

export default {
    async getUserTasks(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const { userId } = req;
            const tasks = await tasksService.getUserTasks(userId as number);
            return res.status(200).json(tasks);
        } catch(err) {
            next(err);
        }
    },

    async getByUserId(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const {admin} = req;
            const {userId} = req.params;
            const tasks = await tasksService.getByUserId(admin as number, userId);
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
            await tasksService.editTaskStatus({admin, userId} as User, {taskId, taskStatus} as Task);
            return res.status(204).send();
        } catch (err) {
            next(err);
        }
    },

    async deleteTask(req: IRequestWithAdmin, res: Response, next: NextFunction) {
        try {
            const {admin} = req;
            const {taskId} = req.params;
            await tasksService.deleteTask(admin as number, taskId);
            return res.status(204).send();
        } catch(err) {
            next(err);
        }
    }
};