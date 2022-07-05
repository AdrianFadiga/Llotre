import { NextFunction, Request, Response } from 'express';

const validateDeleteTask = (req: Request, res: Response, next: NextFunction) => {
    const {taskId} = req.params;
    if (!taskId) next({status: 400, message: 'taskId is required'});
    next();
};

export default validateDeleteTask;