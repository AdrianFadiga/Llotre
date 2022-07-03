import express from 'express';
import {userLogin} from '../controller/Login';

const router = express.Router();

router.post('/', userLogin);

export default router;

