import express from 'express';
import loginController from '../controller/LoginController';
import middlewares from '../middlewares';

const router = express.Router();

router.post('/', middlewares.validateLogin, loginController.userLogin);

export default router;

