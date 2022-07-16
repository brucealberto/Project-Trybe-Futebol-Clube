import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (error:Error, req:Request, res:Response, _next:NextFunction) => {
  let status = 500;
  if (error.message === 'All fields must be filled') status = 400;
  if (error.message === 'Incorrect email or password') status = 401;
  // if (error.message === 'Token must be a valid token') status = 401;
  if (error.message === 'It is not possible to create a match with two equal teams') status = 401;
  if (error.message === 'There is no team with such id!') status = 404;
  res.status(status).json({ message: error.message });
};
export default errorMiddleware;
