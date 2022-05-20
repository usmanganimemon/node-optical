import { Request, Response } from 'express'
import _ from 'lodash'
import PatientService from './../services/PatientService'
import ResponseService from './../services/ResponseService'
class PatientController {
  save (request: Request, res: Response) {
    PatientService.savePatient(request.body).then(response => ResponseService.mapResponse(200, 'Patient created successfully', res))
      .catch(err => ResponseService.mapResponse(500, err, res))
  }

  get (request: Request, res: Response) {
    PatientService.getPatient().then(response => ResponseService.mapResponse(200, response, res))
      .catch(err => ResponseService.mapResponse(500, err, res))
  }

  getPrescription (request: Request, res: Response) {
    PatientService.getPrecription(request.query.patientId)
      .then(res => _.pick(res, ['id', 'name', 'email', 'phoneNumber', 'age', 'profession', 'chiefComplaint', 'place', 'PatientPrescriptions']))
      .then(response => ResponseService.mapResponse(200, response, res))
      .catch(err => ResponseService.mapResponse(500, err, res))
  }

  savePrescription (req: Request, res: Response) {
    PatientService.savePrescription(req.body).then(() => ResponseService.mapResponse(200, 'Prescription saved successfully', res))
      .catch(err => ResponseService.mapResponse(500, err, res))
  }

  updatePrescription (req: Request, res: Response) {
    const id = req.params.id as string
    PatientService.updatePrescripton(id, req.body).then(() => ResponseService.mapResponse(200, 'Prescription updated successfully', res))
      .catch(err => ResponseService.mapResponse(500, err, res))
  }

  deletePrescription (req: Request, res: Response) {
    const id = req.params.id as string
    PatientService.deletePrescription(id).then(() => ResponseService.mapResponse(200, 'Prescription deleted successfully', res))
      .catch(err => ResponseService.mapResponse(500, err, res))
  }
}
export default new PatientController()
