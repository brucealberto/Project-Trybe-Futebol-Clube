import { IService } from '../interfaces';
import Users from '../models/UsersModel';
import repositoryUsers from '../repository/repositoryUsers';

export default class UserService implements IService {
  constructor(private repository: repositoryUsers) {
    this.repository = repository;
  }

  async create(data: Omit<Users, 'id'>): Promise<Users> {
    if (!data.email.includes('@' && '.com')) throw new Error('email inválido');
    if (data.password.length < 6) throw new Error('senha inválida');
    const user = await this.repository.create(data);
    return user;
  }

  async list(): Promise<Users[]> {
    const user = await this.repository.list();
    return user;
  }
}
