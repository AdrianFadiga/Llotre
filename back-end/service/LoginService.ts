import {loginModel} from '../model/LoginModel';

const errorObject = (status: number, message: string) => ({
    status,
    message,
});

const userLogin = async (email: string, password: string) => {
    const user = await loginModel.userLogin(email, password);
    if (!user.length) throw errorObject(401, 'Email ou senha inválidos');
    return user;
};

const loginService = {
    userLogin
};

export {loginService};