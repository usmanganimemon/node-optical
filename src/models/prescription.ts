import sequelize from './index'
import { DataTypes } from 'sequelize'
const prescription = sequelize.define('PatientPrescription', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  patientId: {
    type: DataTypes.UUID
  },
  rightSph: {
    type: DataTypes.INTEGER
  },
  rightCyl: {
    type: DataTypes.INTEGER
  },
  rightAxis: {
    type: DataTypes.INTEGER
  },
  rightAdd: {
    type: DataTypes.INTEGER
  },
  leftSph: {
    type: DataTypes.INTEGER
  },
  leftCyl: {
    type: DataTypes.INTEGER
  },
  leftAxis: {
    type: DataTypes.INTEGER
  },
  leftAdd: {
    type: DataTypes.INTEGER
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'patient_prescription'
})
export default prescription
