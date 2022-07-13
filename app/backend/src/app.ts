import * as express from 'express';
import UsersController from './database/controllers/login-controller';
import RepositoryUsers from './database/repository/repositoryUsers';
import UserService from './database/services/login-service';
import errorMiddleware from './database/middlewares/error-middleware';
import authorizationMiddleware from './database/middlewares/authorizationMiddleware';
import TeamsController from './database/controllers/teams-controller';
import TeamsService from './database/services/teams-service';
import RepositoryTeams from './database/repository/repositoryTeams';
// const factory = () => {
//   const entidade = new RepositoryUsers();
//   const service = new UserService(entidade);
//   const controller = new UsersController(service);
//   return controller;
// };
const loginController = new UsersController(new UserService(new RepositoryUsers()));
const teamsControler = new TeamsController(new TeamsService(new RepositoryTeams()));

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      // this.app.post('/users', factory);
      next();
    };
    this.app.use(express.json());
    this.app.use(accessControl);
    // Login Routes
    this.app.post('/login', (req, res, next) => { loginController.find(req, res, next); });
    this.app.get('/login/validate', authorizationMiddleware);
    // Teams Routes
    this.app.get('/teams', (req, res, next) => { teamsControler.list(req, res, next); });
    this.app.get('/teams/:id', (req, res, next) => { teamsControler.find(req, res, next); });
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
