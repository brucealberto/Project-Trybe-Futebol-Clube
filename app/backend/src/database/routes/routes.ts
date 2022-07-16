// import { Application } from 'express';
// import UsersController from '../controllers/login-controller';
// import MatchesController from '../controllers/matches-controller';
// import TeamsController from '../controllers/teams-controller';
// import validationMiddleware from '../middlewares/validationMiddleware';
// import RepositoryLogin from '../repository/repositoryUsers';
// import LoginService from '../services/login-service';

// export default class Routers {
//   private _usersControler = new UsersController(new LoginService(new RepositoryLogin()));
//   private _teamsController = new TeamsController();
//   private _matchesController = new MatchesController();
//   private _validations = validationMiddleware;

//   public login(app: Application): void {
//     app.post(
//       '/login',
//       (req, res, next) => (req, res, next),
//       (req, res) => this._usersControler.find(req, res, next),
//     );
//   }

//   public teams(app:Application): void {
//     app.get(
//       '/teams/:id',
//       (req, res) => this._teamsController.getById(req, res),
//     );
//     app.get(
//       '/teams',
//       (req, res) => this._teamsController.getAll(req, res),
//     );
//   }

//   public matches(app:Application): void {
//     app.patch(
//       '/matches/:id/finish',
//       (req, res) => this._matchesController.finish(req, res),
//     );
//     app.patch(
//       '/matches/:id',
//       (req, res) => this._matchesController.update(req, res),
//     );
//     app.get('/matches', (req, res) => this._matchesController.getAll(req, res));
//     app.post(
//       '/matches',
//       (req, res, next) => this._validations.auth(req, res, next),
//       (req, res, next) => this._validations.validateTeams(req, res, next),
//       (req, res) => this._matchesController.create(req, res),
//     );
//   }

//   public leaderboard(app: Application): void {
//     app.get(
//       '/leaderboard/home',
//       (req, res) => this._leaderBoardController.getHome(req, res),
//     );
//     app.get(
//       '/leaderboard/away',
//       (req, res) => this._leaderBoardController.getAway(req, res),
//     );
//     app.get(
//       '/leaderboard',
//       (req, res) => this._leaderBoardController.getLeaderBoard(req, res),
//     );
//   }
// }

// // this.app.post('/login', (req, res, next) => {loginController.find(req, res, next); });
//   // this.app.get('/login/validate', authorizationMiddleware);
//   // this.app.get('/teams', (req, res, next) => { teamsControler.list(req, res, next); });
//   // this.app.get('/teams/:id', (req, res, next) => { teamsControler.find(req, res, next); });
//   // this.app.get('/matches', (req, res, next) => { matchesController.list(req, res, next); });
//   // this.app.post('/matches', validationMiddleware, (req, res, next) => {
//   //   matchesController.create(req, res, next); });
//   // this.app.patch('/matches/:id/finish', (req, res, next) => {
//   //   matchesController.update(req, res, next)});
