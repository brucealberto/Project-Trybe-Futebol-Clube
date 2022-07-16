import * as express from 'express';
import MatchesController from '../controllers/matches-controller';
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

router.post('/', (req, res, next) => {
  matchesController.create(req, res, next);
});

router.patch('/:id/finish', (req, res, next) => {
  matchesController.update(req, res, next);
});

// router.patch('/:id', (req, res, next) => {
//   controller.updateScore(req, res, next);
// });

export default router;
