import express from 'express'
import AuthController from '../controllers/AuthController'
import { authJWT } from '../middleware/authToken'
const router = express.Router()
router.get('/timezones', (req: express.Request, res: express.Response) => AuthController.getLocationsWithTimezones(req, res))
router.post('/register', (req: express.Request, res: express.Response) => AuthController.register(req, res))
router.post('/login', (req: express.Request, res: express.Response) => AuthController.login(req, res))
router.get('/user', authJWT, (req: express.Request, res: express.Response) => AuthController.fetchUser(req, res))
export default router
