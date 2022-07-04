import tasksModel from '../model/TasksModel';
// const errorObject = (status: number, message: string) => ({
//     status,
//     message
// });
export default {
    async getByUserId (id: number) {
        const tasks = await tasksModel.getByUserId(id);
        return tasks;
    }
};