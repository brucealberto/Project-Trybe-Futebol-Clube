import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (error:Error, req:Request, res:Response, _next:NextFunction) => {
  let status = 500;
  if (error.message === 'All fields must be filled') status = 400;
  if (error.message === 'Incorrect email or password') status = 401;
  res.status(status).send(error.message);
};
export default errorMiddleware;
