import express from 'express';
import tasksController from '../controller/tasksController';
import validateJWT from '../auth/validateJWT';
import middlewares from '../middlewares';

const router = express.Router();

router.get('/', validateJWT, tasksController.getByUserId);

router.post('/', validateJWT, middlewares.validateTask, tasksController.addNewTask);

router.put('/', validateJWT, middlewares.validateEditTaskStatus, tasksController.editTaskStatus);

export default router;

