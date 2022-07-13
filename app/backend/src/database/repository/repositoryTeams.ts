import TeamsModel from '../models/TeamsModel';

export default class RepositoryTeams {
  constructor(private teamsModel = TeamsModel) {
    this.teamsModel = teamsModel;
  }

  async list(): Promise<TeamsModel[]> {
    const result = await this.teamsModel.findAll();
    return result;
  }
}
