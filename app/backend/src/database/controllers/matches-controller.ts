import { NextFunction, Request, Response } from 'express';
import MatchesService from '../services/matches-service';

export default class MatchesController {
  constructor(private service: MatchesService) {
    this.service = service;
  }

  async list(req:Request, res:Response, _next:NextFunction) {
    try {
      const result = await this.service.list();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async create(req:Request, res:Response, next:NextFunction) {
    try {
      const result = await this.service.create({ ...req.body, inProgress: true });
      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async update(req:Request, res:Response, _next:NextFunction) {
    try {
      const { id } = req.params;
      await this.service.update(+id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async updateId(req:Request, res:Response, _next:NextFunction) {
    try {
      const { id } = req.params;
      await this.service.updateId(req.body, +id);
      return res.status(200).json({ message: 'Updated ID' });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  async listClassification(req:Request, res:Response, _next:NextFunction) {
    try {
      const result = await this.service.listClassification();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
