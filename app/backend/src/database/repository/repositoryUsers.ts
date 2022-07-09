import UsersModel from '../models/UsersModel';
import { IModel } from '../interfaces';

export default class repositoryUsers implements IModel {
  constructor(private userModel = UsersModel) {
    this.userModel = userModel;
  }

  async create(data: Omit<UsersModel, 'id'>): Promise<UsersModel> {
    const usersData = await this.userModel.create(data);
    return usersData;
  }

  async list(): Promise<UsersModel[]> {
    const usersData = await this.userModel.findAll();
    return usersData;
  }
}
