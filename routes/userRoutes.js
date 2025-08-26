import express from 'express';
import {
  login,
  getUsuarios,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  buscarUsuario
} from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.get('/usuarios', authMiddleware, getUsuarios);
router.post('/usuarios', authMiddleware, createUsuario);
router.put('/usuarios/:id', authMiddleware, updateUsuario);
router.delete('/usuarios/:id', authMiddleware, deleteUsuario);
router.get('/buscar', authMiddleware, buscarUsuario);

export default router;
