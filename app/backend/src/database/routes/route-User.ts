import * as express from 'express';
import UsersController from '../controllers/login-controller';
import authorizationMiddleware from '../middlewares/authorizationMiddleware';
import RepositoryLogin from '../repository/repositoryUsers';
import LoginService from '../services/login-service';

const userController = new UsersController(new LoginService(new RepositoryLogin()));

const router = express.Router();

router.post('/', (req, res, next) => {
  userController.find(req, res, next);
});
router.get('/validate', authorizationMiddleware);

export default router;
