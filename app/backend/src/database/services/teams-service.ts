import TeamsModel from '../models/TeamsModel';
import RepositoryTeams from '../repository/repositoryTeams';

export default class TeamsService {
  constructor(private repository: RepositoryTeams) {
    this.repository = repository;
  }

  async list(): Promise<TeamsModel[]> {
    const result = await this.repository.list();
    return result;
  }

  async find(id:string): Promise<TeamsModel> {
    const result = await this.repository.find({ where: { id } });
    return result;
  }
}
