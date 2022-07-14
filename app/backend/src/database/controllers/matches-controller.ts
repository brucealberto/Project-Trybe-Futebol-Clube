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
      // const { id } = req.params;
      // const find = await this.service.findByPk(+id);
      // if (!find) return res.status(404).json({ message: 'There is no team with such id!' });
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
 *res.status(404).json({ message: 'There is no team with such id!' });

    // const { homeTeam, awayTeam } = req.body;
      // if (awayTeam === homeTeam) {
      //   return res.status(401).json(
      //     { message: 'It is not possible to create a match with two equal teams' },
      //   );
      // }
 */
