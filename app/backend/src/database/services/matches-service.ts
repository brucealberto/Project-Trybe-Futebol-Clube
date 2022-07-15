import MatchesModel from '../models/MatchesModel';
import RepositoryMatches from '../repository/repositoryMatches';

export default class MatchesService {
  constructor(private repository: RepositoryMatches) {
    this.repository = repository;
  }

  async list(): Promise<MatchesModel[]> {
    const result = await this.repository.list();
    return result;
  }

  async create(data:MatchesModel) {
    try {
      if (data.homeTeam === data.awayTeam) {
        throw new Error('It is not possible to create a match with two equal teams');
      }

      const find = await this.repository.findTeamsByPk(data.id);

      if (!find) { throw new Error('There is no team with such id!'); }

      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // async findByPk(id:number) : Promise<MatchesModel> {
  //   const result = await this.repository.findTeamsByPk(id);
  //   return result;
  // }

  async update(id: number): Promise<MatchesModel[]> {
    const result = await this.repository.updateMethod(id);
    return result;
  }
  // async findByProgress(inProgress: number): Promise<MatchesModel> {
  //   const result = await this.repository.findByProgress(inProgress);
  //   return result;
  // }
}
