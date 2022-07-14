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

  async create(data:MatchesModel): Promise<MatchesModel> {
    const result = await this.repository.create(data);
    return result;
  }
  // async findByProgress(inProgress: number): Promise<MatchesModel> {
  //   const result = await this.repository.findByProgress(inProgress);
  //   return result;
  // }
}
