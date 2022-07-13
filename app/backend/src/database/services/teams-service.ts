import { ITeamsService } from '../interfaces';
import TeamsModel from '../models/TeamsModel';
import RepositoryTeams from '../repository/repositoryTeams';

export default class TeamsService implements ITeamsService {
  constructor(private repository: RepositoryTeams) {
    this.repository = repository;
  }

  async list(): Promise<TeamsModel[]> {
    const result = await this.repository.list();
    return result;
  }
}
