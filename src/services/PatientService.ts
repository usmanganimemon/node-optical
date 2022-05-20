import Patient, { PatientInstance } from '../models/patient'
import PatientPrescription from '../models/prescription'
import { PrescriptionInstance, PrescriptionCreationAttributes } from '../types'
// import PrescriptionModel from '../models/prescription'
class PatientService {
  async savePatient (data: any) {
    const prescription: any = data.prescription
    delete data.prescription
    const patient: PatientInstance = await Patient.create(data)
    prescription.patientId = patient.id
    await PatientPrescription.create(prescription)
    return patient
  }

  async getPatient () {
    return Patient.findAll()
  }

  async getPrecription (id: any) {
    return Patient.findByPk(id, { include: PatientPrescription })
  }

  async savePrescription (data: PrescriptionCreationAttributes) {
    const prescription: PrescriptionInstance = await PatientPrescription.create(data)
    return prescription
  }

  updatePrescripton (prescriptionId: string, data: PrescriptionCreationAttributes) {
    return PatientPrescription.update(data, { where: { id: prescriptionId } })
  }

  deletePrescription (prescriptionId: string) {
    return PatientPrescription.destroy({
      where: {
        id: prescriptionId
      }
    })
  }
}
export default new PatientService()
