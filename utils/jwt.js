import jwt from 'jsonwebtoken';

export const generarToken = (usuario) => {
  return jwt.sign({ usuario }, 'secreto', { expiresIn: '1h' });
};
