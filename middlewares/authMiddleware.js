import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: 'Token requerido' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secreto');
    req.usuario = decoded.usuario;
    next();
  } catch (err) {
    res.status(403).json({ msg: 'Token inválido' });
  }
};

export default authMiddleware;
