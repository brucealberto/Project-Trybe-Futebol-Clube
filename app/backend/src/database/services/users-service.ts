import { IModel, IService } from '../interfaces';
import Users from '../models/UsersModel';

export default class UserService implements IService {
  constructor(private userModel: IModel) {
    this.userModel = userModel;
  }

  async create(data: Omit<Users, 'id'>): Promise<Users> {
    // if (!data.object || data.object.length < 2) throw new Error('Objeto inválido');
    const user = await this.userModel.create(data);
    return user;
  }

  async list(): Promise<Users[]> {
    const user = await this.userModel.list();
    return user;
  }
}
