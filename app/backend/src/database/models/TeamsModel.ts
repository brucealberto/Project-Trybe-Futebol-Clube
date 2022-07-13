import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Teams extends Model {
  public id: number;
  public teamName: string;
}

Teams.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    teamName: DataTypes.STRING,
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Teams',
    timestamps: false,
  },
);
