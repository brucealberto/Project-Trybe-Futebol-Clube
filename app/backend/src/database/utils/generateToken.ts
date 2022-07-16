import * as jwt from 'jsonwebtoken';
// import Users from '../models/UsersModel';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig:jwt.SignOptions = { expiresIn: '20h', algorithm: 'HS256' };

const generateToken = (payload: object) => {
  const token = jwt
    .sign({ data: payload }, secret, jwtConfig);
  return token;
};

export default generateToken;
