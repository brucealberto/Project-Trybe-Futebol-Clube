import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

export default class RepositoryMatches {
  constructor(private matchesModel = Matches) {
    this.matchesModel = matchesModel;
  }

  async list():Promise<Matches[]> {
    const result = await this.matchesModel.findAll({
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: { exclude: ['id'] } },
      {
        model: Teams,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }] });
    return result;
  }
}
