import { IService } from '../interfaces';
import Users from '../models/UsersModel';
import repositoryUsers from '../repository/repositoryUsers';
import generateToken from '../utils/generateToken';

export default class LoginService implements IService {
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
    const login = await this.repository.create(data);
    generateToken(login);
    return login;
  }

  async list(): Promise<Users[]> {
    const login = await this.repository.list();
    return login;
  }
}

/**
 * const hashedPassword = await bcrypt.hash(req.body.password, 10)
 * const user = {name : req.body, password: hashedPassword}
 */
