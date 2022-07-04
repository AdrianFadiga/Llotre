import connection from './connection';

export default {
    async getByUserId(id: number) {
        const query = 'SELECT title, task, createdAt, task_status FROM Tasks WHERE user_id=?';
        const [tasks] = await connection.execute(query, [id]);
        return tasks; 
    }
};