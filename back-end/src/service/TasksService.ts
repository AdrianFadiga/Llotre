import IRequestWithAdmin from '../interfaces/IRequestWithAdmin';
import ITask from '../interfaces/ITask';
import tasksModel from '../model/TasksModel';
const errorObject = (status: number, message: string) => ({
    status,
    message
});
export default {
    async getByUserId (id: number) {
        const tasks = await tasksModel.getByUserId(id);
        return tasks;
    },

    async addNewTask(admin: number, {userId, title, task}: ITask) {
        if (admin !== 1) throw errorObject(403, 'Apenas administradores podem criar novas tasks');
        await tasksModel.addNewTask({userId, title, task});
        return;
    },

    async editTaskStatus({admin, userId}: IRequestWithAdmin, {taskId, taskStatus}: ITask) {
        const [task] = await tasksModel.getById(taskId as number);
        if (admin !== 1 && task.user_id !== userId) throw errorObject(403, 'Você não pode modificar o status desta tarefa');
        await tasksModel.editTaskStatus(taskId as number, taskStatus as string);
    },
};