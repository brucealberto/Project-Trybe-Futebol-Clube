import Teams from '../models/TeamsModel';
import Users from '../models/UsersModel';

export interface IUsers {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

// export interface IModel {
//   create(data: Omit<Users, 'id'>): Promise<Users>;
//   // list(): Promise<Users[]>;
// }

export interface IUsersService {
  find(data: Omit<Users, 'id'>): Promise<Users>;
  // list(): Promise<Users[]>;
}
export interface ITeamsService {
  list(): Promise<Teams[]>;
  find(data: string): Promise<Teams>;
}
