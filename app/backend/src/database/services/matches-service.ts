import { IHomeBoard } from '../interfaces';
import MatchesModel from '../models/MatchesModel';
import RepositoryMatches from '../repository/repositoryMatches';
import RepositoryTeams from '../repository/repositoryTeams';
import { draws,
  efficiency, goalsDown, goalsUp, losses, totalPoints, victory } from '../utils/boardHelp';

const expectedReturn = (data: IHomeBoard[]) => {
  const response = data.map((t) => ({
    name: t.teamName,
    totalPoints: totalPoints(t.teamHome),
    totalGames: t.teamHome.length,
    totalVictories: victory(t.teamHome),
    totalDraws: draws(t.teamHome),
    totalLosses: losses(t.teamHome),
    goalsFavor: goalsUp(t.teamHome),
    goalsOwn: goalsDown(t.teamHome),
    goalsBalance: goalsUp(t.teamHome) - goalsDown(t.teamHome),
    efficiency: efficiency(t.teamHome),
  }));
  return response;
};
export default class MatchesService {
  private repoTeams: RepositoryTeams;
  constructor(private repository: RepositoryMatches) {
    this.repository = repository;
    this.repoTeams = new RepositoryTeams();
  }

  async list(): Promise<MatchesModel[]> {
    const result = await this.repository.list();
    return result;
  }

  async create(data:MatchesModel): Promise<MatchesModel> {
    if (data.homeTeam === data.awayTeam) {
      throw new Error('It is not possible to create a match with two equal teams');
    }

    const find = await this.repoTeams.findTeamsByPk(data.homeTeam);

    if (!find) { throw new Error('There is no team with such id!'); }

    const result = await this.repository.create(data);
    return result;
  }

  async update(id: number) {
    const result = await this.repository.updateMethod(id);
    return result;
  }

  async updateId(body: object, id: number) {
    const result = await this.repository.updateId(body, id);
    return result;
  }

  async listClassification() {
    const matches = await this.repository.listClassification() as unknown as IHomeBoard[];
    return expectedReturn(matches);
  }
}
