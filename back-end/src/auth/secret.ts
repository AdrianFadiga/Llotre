import dotenv from 'dotenv';
dotenv.config();

const secret: string | undefined = process.env.JWT_SECRET;

export default secret;