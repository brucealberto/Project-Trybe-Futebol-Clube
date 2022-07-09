import { NextFunction, Request, Response } from 'express';
import { IService } from '../interfaces';

export default class UsersController {
  private service: IService;
  constructor(service: IService) {
    this.service = service;
  }

  async create(req: Request, res: Response, _next: NextFunction) {
    try {
      const user = await this.service.create(req.body);
      return res.status(201).json({ user });
    } catch (error) {
      console.log(error);
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
