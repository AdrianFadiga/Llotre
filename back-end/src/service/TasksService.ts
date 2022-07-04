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

    async verifyPermission(admin: number, {userId, taskId}: ITask): Promise<boolean> {
        if (admin === 1) return true;
        const [verifyTask] = await tasksModel.getById(taskId as number);
        if (verifyTask.user_id === userId) return true;
        return false; 

    },

    async editTaskStatus({admin, userId}: IRequestWithAdmin, {taskId, taskStatus}: ITask) {
        const verifyPermission = await this.verifyPermission(admin as number, {userId, taskId});
        if (!verifyPermission) throw errorObject(403, 'Você não tem permissão para modificar o status desta tarefa');
        await tasksModel.editTaskStatus(taskId as number, taskStatus as string);
        return;
    },
};