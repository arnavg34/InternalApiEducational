import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
  getCurrentUser
} from '../controllers/userController';

const router = Router();

router.get('/getUsers', getUsers);
router.post('/getUserByEmail', getUserByEmail);
router.get('/getCurrentUser', getCurrentUser);
router.post('/createUser', createUser);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;