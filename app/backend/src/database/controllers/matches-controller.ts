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
}
