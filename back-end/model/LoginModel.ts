import connection from './connection';

const userLogin = async (email: string, password: string) => {
    const query = 'SELECT name, lastName, email, admin FROM Users WHERE email=? AND password=?';
    const [user] = await connection.execute(query, [email, password]);
    return user as [];
};


const loginModel = {
    userLogin,
};

export {loginModel};