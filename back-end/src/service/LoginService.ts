import loginModel from '../model/LoginModel';
import jwt from 'jsonwebtoken';
import jwtConfig from '../auth/jwtConfig';
import secret from '../auth/secret';

const errorObject = (status: number, message: string) => ({
    status,
    message,
});

export default {
    async userLogin (email: string, password: string) {
        const user = await loginModel.userLogin(email, password);
        if (!user.length) throw errorObject(401, 'Email ou senha inválidos');
        const token = jwt.sign({data: email}, secret as string, jwtConfig);
        return token;
    }
};
