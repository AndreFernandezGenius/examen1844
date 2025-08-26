import jwt from 'jsonwebtoken';

export const generarToken = (usuario,email) => {
  return jwt.sign({ usuario,email }, process.env.SEGREDO, { expiresIn: '1h' });
};
