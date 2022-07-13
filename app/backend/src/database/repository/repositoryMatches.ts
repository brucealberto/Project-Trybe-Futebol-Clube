import Matches from '../models/MatchesModel';

export default class RepositoryMatches {
  constructor(private matchesModel = Matches) {
    this.matchesModel = matchesModel;
  }

  async list():Promise<Matches[]> {
    const result = await this.matchesModel.findAll();
    return result;
  }
}
