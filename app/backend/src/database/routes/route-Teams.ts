import * as express from 'express';
import TeamsController from '../controllers/teams-controller';
import RepositoryTeams from '../repository/repositoryTeams';
import TeamsService from '../services/teams-service';

const teamsControler = new TeamsController(
  new TeamsService(new RepositoryTeams()),
);

const router = express.Router();

router.get('/', (req, res, next) => {
  teamsControler.list(req, res, next);
});

router.get('/:id', (req, res, next) => {
  teamsControler.find(req, res, next);
});

export default router;
