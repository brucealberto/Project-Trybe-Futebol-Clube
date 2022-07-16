import * as express from 'express';
import MatchesController from '../controllers/matches-controller';
import validationMiddleware from '../middlewares/validationMiddleware';
import RepositoryMatches from '../repository/repositoryMatches';
import MatchesService from '../services/matches-service';

const matchesController = new MatchesController(new MatchesService(new RepositoryMatches()));

const router = express.Router();

// router.get('/matches', (req, res, next) => {
//   controller.findByProgress(req, res, next);
// });

router.get('/', (req, res, next) => {
  matchesController.list(req, res, next);
});

router.post('/', validationMiddleware, (req, res, next) => {
  matchesController.create(req, res, next);
});

router.patch('/:id', (req, res, next) => {
  matchesController.updateId(req, res, next);
});

router.patch('/:id/finish', (req, res, next) => {
  matchesController.update(req, res, next);
});

export default router;
