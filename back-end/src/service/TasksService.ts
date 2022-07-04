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

    async addNewTask(admin: number, {userId, title, task}) {
        if (admin !== 1) throw errorObject(403, 'Apenas administradores podem criar novas tasks');
        await tasksModel.addNewTask({userId, title, task});

    }
};