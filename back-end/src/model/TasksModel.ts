import ITask from '../interfaces/ITask';
import connection from './connection';

export default {
    async getByUserId(id: number) {
        const query = 'SELECT title, task, createdAt, task_status FROM Tasks WHERE user_id=?';
        const [tasks] = await connection.execute(query, [id]);
        return tasks; 
    },

    async addNewTask({userId, title, task}: ITask) {
        const query = 'INSERT INTO Tasks (user_id, title, task) values (?, ?, ?)';
        await connection.execute(query, [userId, title, task]);
    }
};