import { IUsersService } from '../interfaces';
import Users from '../models/UsersModel';
import RepositoryLogin from '../repository/repositoryUsers';

const errorMessage = 'All fields must be filled';
export default class LoginService implements IUsersService {
  constructor(private repository: RepositoryLogin) {
    this.repository = repository;
  }

  async find(data: Omit<Users, 'id'>): Promise<Users> {
    if (!data.email || !data.password) {
      throw new Error(errorMessage);
    }
    if (!data.email.includes('@') || !data.email.includes('.com')) {
      throw new Error(errorMessage);
    }
    if (data.password.length <= 6) {
      throw new Error(errorMessage);
    }
    const login = await this.repository.find({
      where: { email: data.email },
    });
    if (!login) {
      throw new Error('Incorrect email or password');
    }
    return login;
  }

  // async list(): Promise<Users[]> {
  //   const login = await this.repository.list();
  //   return login;
  // }
}

/**
 *    if (!data.email.includes('@') || !data.email.includes('.com')) {
      throw new Error('Incorrect email or password');
    }
 * const hashedPassword = await bcrypt.hash(req.body.password, 10)
 * const user = {name : req.body, password: hashedPassword}
 */
