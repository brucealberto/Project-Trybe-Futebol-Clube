import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export default (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const secret = process.env.JWT_SECRET || 'jwt_secret';
      jwt.verify(authorization, secret) as jwt.JwtPayload;
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
