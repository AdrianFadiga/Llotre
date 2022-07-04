import jwt from 'jsonwebtoken';

const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256'
};

export default jwtConfig;