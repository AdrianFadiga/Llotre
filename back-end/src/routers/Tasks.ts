import express from 'express';
import tasksController from '../controller/tasksController';
import validateJWT from '../auth/validateJWT';

const router = express.Router();

router.get('/', validateJWT, tasksController.getUserTasks);

export default router;

