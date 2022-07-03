import express from 'express';
import {loginController} from '../controller/LoginController';

const router = express.Router();

router.post('/', loginController.userLogin);

export default router;

