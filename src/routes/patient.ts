import express from 'express'
import PatientController from '../controllers/PatientController'
const router = express.Router()
router.post('/', (req: express.Request, res: express.Response) => PatientController.save(req, res))
router.get('/', (req: express.Request, res: express.Response) => PatientController.get(req, res))
router.get('/precription', (req: express.Request, res: express.Response) => PatientController.getPrescription(req, res))
router.post('/precription', (req: express.Request, res: express.Response) => PatientController.savePrescription(req, res))
router.patch('/precription/:id', (req: express.Request, res: express.Response) => PatientController.updatePrescription(req, res))
router.delete('/precription/:id', (req: express.Request, res: express.Response) => PatientController.deletePrescription(req, res))
export default router
