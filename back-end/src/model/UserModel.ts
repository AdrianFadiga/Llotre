import IUser from '../interfaces/IUser';
import connection from './connection';

export default {
    async getByEmail(email: string): Promise<IUser[]> {
        const query = 'SELECT email, admin from Users where email=?';
        const [user] = await connection.execute(query, [email]);
        return user as IUser[];
    }
};