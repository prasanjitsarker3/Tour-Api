import express from 'express';
import { userController } from '../controllers/user.controller';
const router = express.Router();

router.post('/create-user', userController.createUser);
router.get('/all_user', userController.getAllUser);
router.get('/single_user/:id', userController.getSingleUser);
router.patch('/update_user/:id', userController.getUpdateUser);
router.delete('/deleted_user/:id', userController.getDeletedUser);

export const userRoutes = router;
