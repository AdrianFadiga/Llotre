import Task from '../types/Task';
import connection from './connection';

export default {
    async getUserTasks(id: number | string): Promise<Task[]> {
        const query = 'SELECT title, task, createdAt, task_status as taskStatus FROM Tasks WHERE user_id=?';
        const [tasks] = await connection.execute(query, [id]);
        return tasks as Task[]; 
    },

    async getById(id: number): Promise<Task[]> {
        const query = 'SELECT * from Tasks where id=?';
        const [task] = await connection.execute(query, [id]);
        return task as Task[];
    },

    async addNewTask({userId, title, task}: Task) {
        const query = 'INSERT INTO Tasks (user_id, title, task) values (?, ?, ?)';
        await connection.execute(query, [userId, title, task]);
        return;
    },

    async editTaskStatus(taskId: number, taskStatus: string) {
        const query = 'UPDATE Tasks SET task_status=? WHERE id=?';
        await connection.execute(query, [taskStatus, taskId]);
        return;
    },

    async deleteTask(taskId: string) {
        const query = 'DELETE FROM Tasks WHERE id=?';
        await connection.execute(query, [taskId]);
        return;
    },
};