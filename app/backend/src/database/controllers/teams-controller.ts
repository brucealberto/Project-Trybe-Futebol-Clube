import { NextFunction, Request, Response } from 'express';
import { ITeamsService } from '../interfaces';

export default class TeamsController {
  constructor(private service: ITeamsService) {
    this.service = service;
  }

  async list(req: Request, res: Response, _next: NextFunction) {
    try {
      const teams = await this.service.list();
      return res.status(200).json(teams);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async find(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const teamsId = await this.service.find(id);
      return res.status(200).json(teamsId);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
