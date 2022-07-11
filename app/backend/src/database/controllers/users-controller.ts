import { NextFunction, Request, Response } from 'express';
import { IService } from '../interfaces';

// const handleError = (error:Error) => ({
//   status: 404,
//   message: error.message,
// });

export default class UsersController {
  private service: IService;
  constructor(service: IService) {
    this.service = service;
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      // const newError = error as Error;
      // const errorMessage = handleError(newError);
      // return res.status(404).json(errorMessage.message);
      next(error);
    }
  }

  async list(req: Request, res: Response, _next: NextFunction) {
    try {
      const users = await this.service.list();
      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
    }
  }
}
