import MatchesModel from '../models/MatchesModel';
import RepositoryMatches from '../repository/repositoryMatches';

export default class MatchesService {
  constructor(private repository: RepositoryMatches) {
    this.repository = repository;
  }

  async list():Promise<MatchesModel[]> {
    const result = await this.repository.list();
    return result;
  }
}
