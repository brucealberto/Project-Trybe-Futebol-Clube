import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

export default class RepositoryMatches {
  private _teamsModel = Teams;
  constructor(private matchesModel = Matches) {
    this.matchesModel = matchesModel;
  }

  async list(): Promise<Matches[]> {
    const result = await this.matchesModel.findAll({
      include: [
        {
          model: Teams,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },
        {
          model: Teams,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return result;
  }

  async create(data: Matches): Promise<Matches> {
    // const findProgress = await this.matchesModel.findAll({data: data.inProgress})
    const result = await this.matchesModel.create(data);
    return result;
  }

  async updateMethod(id: number) {
    const result = await this.matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
    return result;
  }

  async updateId(body: object, id: number) {
    const result = await this.matchesModel.update(
      body,
      { where: { id } },
    );
    return result;
  }

  async findTeamsByPk(id: number): Promise<Matches> {
    const result = await this.matchesModel.findByPk(id);
    return result as Matches;
  }

  async listClassification() {
    const result = await this._teamsModel.findAll({
      include:
        {
          model: this.matchesModel,
          as: 'teamHome',
          attributes: { exclude: ['id', 'homeTeam', 'awayTeam', 'inProgress'] },
          where: { inProgress: false },
        },
      attributes: { exclude: ['id'] },
    });
    return result;
  }
}
