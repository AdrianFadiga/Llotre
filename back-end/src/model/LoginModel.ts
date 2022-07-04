import connection from './connection';
import IUser from '../interfaces/IUser';

export default {
    async userLogin (email: string, password: string): Promise<IUser[]> {
        const query = 'SELECT name, lastName, email, admin FROM Users WHERE email=? AND password=?';
        const [user] = await connection.execute(query, [email, password]);
        return user as IUser[];
    }
};