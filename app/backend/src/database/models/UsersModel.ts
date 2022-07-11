import { DataTypes, Model } from 'sequelize';
import db from '.';

class Users extends Model {
  public id: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

Users.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    // modelName: 'example',
    timestamps: false,
  },
);

export default Users;
