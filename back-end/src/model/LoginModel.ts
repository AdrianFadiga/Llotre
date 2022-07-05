import connection from './connection';
import User from '../types/User';

export default {
    async userLogin (email: string, password: string): Promise<User[]> {
        const query = 'SELECT id as userId, name, lastname, email, admin FROM Users WHERE email=? AND password=?';
        const [user] = await connection.execute(query, [email, password]);
        return user as User[];
    }
};