import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

export default class Matches extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: number;
}

Matches.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    homeTeam: DataTypes.INTEGER,
    homeTeamGoals: DataTypes.INTEGER,
    awayTeam: DataTypes.INTEGER,
    awayTeamGoals: DataTypes.INTEGER,
    inProgress: DataTypes.INTEGER,
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Matches',
    timestamps: false,
  },
);
Matches.belongsTo(Teams, {
  foreignKey: 'homeTeam',
  as: 'teamHome',
});
Matches.belongsTo(Teams, {
  foreignKey: 'awayTeam',
  as: 'teamAway',
});
