import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const newTask = Joi.object({
    userId: Joi.number().required(),
    title: Joi.string().min(5).required(),
    task: Joi.string().min(5).required(),
});

const validateTask = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, title, task } = req.body;
    const { error } = newTask.validate({ userId, title, task });
    if (error) next({ message: error.message, status: 401 });
    next();

}; 

export default validateTask;
