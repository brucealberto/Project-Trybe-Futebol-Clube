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

  async create(req:Request, res:Response, _next:NextFunction) {
    try {
      const result = await this.service.create({ ...req.body, inProgress: true });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error });
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

  // async findByProgress(req:Request, res:Response, _next:NextFunction) {
  //   try {
  //     const { inProgress } = req.query;
  //     const result = await this.service.findByProgress(inProgress);
  //     return res.status(200).json(result);
  //   } catch (error) {
  //     return res.status(400).json({ message: error });
  //   }
  // }
}

/**
 *  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
 */
