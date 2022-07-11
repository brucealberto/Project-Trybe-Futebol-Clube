import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

interface Data {
  data:{ role:string }
}

export default (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const secret = process.env.JWT_SECRET || 'jwt_secret';
      const data = jwt.verify(authorization, secret) as Data;
      return res.status(200).json({ role: data.data.role });
    }
  } catch (error) {
    console.log(error);
    next({ message: 'token inválido' });
  }

  res.status(200).end();
};
