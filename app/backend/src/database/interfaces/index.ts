import Users from '../models/UsersModel';

export interface IUsers {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IModel {
  create(data: Omit<Users, 'id'>): Promise<Users>;
  list(): Promise<Users[]>;
}

export interface IService {
  create(data: Omit<Users, 'id'>): Promise<Users>;
  list(): Promise<Users[]>;
}
