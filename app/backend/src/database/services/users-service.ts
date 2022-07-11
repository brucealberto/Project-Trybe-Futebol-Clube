import { IService } from '../interfaces';
import Users from '../models/UsersModel';
import repositoryUsers from '../repository/repositoryUsers';
import generateToken from '../utils/generateToken';

export default class UsersService implements IService {
  constructor(private repository: repositoryUsers) {
    this.repository = repository;
  }

  async create(data: Omit<Users, 'id'>): Promise<Users> {
    if (!data.email && !data.password) {
      throw new Error('All fields must be filled');
    }
    if (!data.email.includes('@') || !data.email.includes('.com')) {
      throw new Error('Incorrect email or password');
    }
    if (data.password.length < 6) {
      throw new Error('Incorrect email or password');
    }
    const user = await this.repository.create(data);
    generateToken(user);
    return user;
  }

  async list(): Promise<Users[]> {
    const user = await this.repository.list();
    return user;
  }
}

/**
 * const hashedPassword = await bcrypt.hash(req.body.password, 10)
 * const user = {name : req.body, password: hashedPassword}
 */
