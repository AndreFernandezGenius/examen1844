import { generarToken } from '../utils/jwt.js';

let usuarios = [];

export const login = (req, res) => {
  const { usuario } = req.body;
  if (!usuario) return res.status(400).json({ msg: 'Usuario requerido' });
  const token = generarToken(usuario);
  res.json({ token });
};

export const getUsuarios = (req, res) => {
  res.json(usuarios);
};

export const createUsuario = (req, res) => {
  const { nombre, edad } = req.body;
  const nuevo = { id: Date.now().toString(), nombre, edad };
  usuarios.push(nuevo);
  res.json(nuevo);
};

export const updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;
  usuarios = usuarios.map(u => (u.id === id ? { ...u, nombre, edad } : u));
  res.json({ msg: 'Usuario actualizado' });
};

export const deleteUsuario = (req, res) => {
  const { id } = req.params;
  usuarios = usuarios.filter(u => u.id !== id);
  res.json({ msg: 'Usuario eliminado' });
};

export const buscarUsuario = (req, res) => {
  const { nombre } = req.query;
  const resultado = usuarios.filter(u => u.nombre.toLowerCase().includes(nombre.toLowerCase()));
  res.json(resultado);
};
