import UsersModel from '../models/UsersModel';

export default class RepositoryLogin {
  constructor(private userModel = UsersModel) {
    this.userModel = userModel;
  }

  async find(data: object): Promise<UsersModel> {
    const usersData = await this.userModel.findOne(data);
    return usersData as UsersModel;
  }

  // async list(): Promise<UsersModel[]> {
  //   const usersData = await this.userModel.findAll();
  //   return usersData;
  // }
}
// as unknow as newinterface[]
