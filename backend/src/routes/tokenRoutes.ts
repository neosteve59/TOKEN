import { Router } from 'express';
import { TokenController } from '../controllers/tokenController';

const router = Router();
const tokenController = new TokenController();

router.get('/tokens', tokenController.getAllTokens.bind(tokenController));
router.get('/tokens/:id', tokenController.getTokenById.bind(tokenController));
router.post('/tokens', tokenController.createToken.bind(tokenController));
router.put('/tokens/:id', tokenController.updateToken.bind(tokenController));
router.delete('/tokens/:id', tokenController.deleteToken.bind(tokenController));

export default router;