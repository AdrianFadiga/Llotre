import { NextFunction, Request, Response } from 'express';

const validateEditTaskStatus = (req: Request, response: Response, next: NextFunction) => {
    const { taskId, taskStatus } = req.body;
    if (!taskId || !taskStatus) next({status: 400, message: 'Task id and task status are required'});
    if (!['Pendente', 'Em Progresso', 'Finalizada'].includes(taskStatus)) next({status: 400, message: 'Apenas os status Pendente, Em Progresso, ou Finalizada são permitidos.'});
    next();
};

export default validateEditTaskStatus;