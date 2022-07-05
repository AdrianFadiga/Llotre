import ITask from '../interfaces/ITask';
import tasksModel from '../model/TasksModel';
import User from '../types/User';
const errorObject = (status: number, message: string) => ({
    status,
    message
});

const verifyAdmin = (admin: number) => {
    if (admin === 1) return true;
    return false;
};
export default {
    async getUserTasks (id: number) {
        const tasks = await tasksModel.getUserTasks(id);
        return tasks;
    },

    async getByUserId(admin: number, id: number) {
        if (!verifyAdmin(admin)) throw errorObject(401, 'Você não tem autorização para verificar estas tarefas');
        const tasks = await tasksModel.getUserTasks(id);
        return tasks;
    },

    async addNewTask(admin: number, {userId, title, task}: ITask) {
        if (admin !== 1) throw errorObject(403, 'Apenas administradores podem criar novas tasks');
        await tasksModel.addNewTask({userId, title, task});
        return;
    },

    async verifyPermission(admin: number, {userId, taskId}: ITask) {
        if (admin === 1) return true;
        const [verifyTask] = await tasksModel.getById(taskId as number);
        if (verifyTask.user_id === userId) return true;
        return false; 

    },

    async editTaskStatus({admin, userId}: User, {taskId, taskStatus}: ITask) {
        const verifyPermission = await this.verifyPermission(admin as number, {userId, taskId});
        if (!verifyPermission) throw errorObject(403, 'Você não tem permissão para modificar o status desta tarefa');
        await tasksModel.editTaskStatus(taskId as number, taskStatus as string);
        return;
    },

    async deleteTask(admin: number, taskId: number) {
        if (admin !== 1) throw errorObject(403, 'Você não tem permissão para deletar esta tarefa');
        await tasksModel.deleteTask(taskId);
        return;
    },
    
};