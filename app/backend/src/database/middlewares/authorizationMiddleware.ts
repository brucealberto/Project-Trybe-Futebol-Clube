import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

// interface Data {
//   data:{ role:}
// }

export default (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const secret = process.env.JWT_SECRET || 'jwt_secret';
      const verified = jwt.verify(authorization, secret) as jwt.JwtPayload;
      if (!verified) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }
      return res.status(200).json({ role: verified.data.role });
    }
  } catch (error) {
    // console.log(error.message);
    next(error);
    // if (error.message === 'jwt malformed') {
    //   return res.status(401).json({ message: 'inválid token' });
    // }
  }
  // res.status(200).end();
};
