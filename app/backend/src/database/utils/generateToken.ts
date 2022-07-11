import * as jwt from 'jsonwebtoken';
import Users from '../models/UsersModel';
import 'dotenv/config';

const secretPassword = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig:jwt.SignOptions = { expiresIn: '20h', algorithm: 'HS256' };

const generateToken = (payload: Users) => {
  const token = jwt
    .sign({ data: payload }, secretPassword, jwtConfig);
  return token;
};

export default generateToken;
