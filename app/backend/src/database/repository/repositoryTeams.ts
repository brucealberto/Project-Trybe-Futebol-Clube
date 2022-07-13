import TeamsModel from '../models/TeamsModel';

export default class RepositoryTeams {
  constructor(private teamsModel = TeamsModel) {
    this.teamsModel = teamsModel;
  }

  async list(): Promise<TeamsModel[]> {
    const result = await this.teamsModel.findAll();
    return result;
  }

  async find(data: object): Promise<TeamsModel> {
    const usersData = await this.teamsModel.findOne(data);
    return usersData as TeamsModel;
  }
}
