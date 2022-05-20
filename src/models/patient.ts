import sequelize from './index'
import { DataTypes, Model, Optional } from 'sequelize'
import PatientPrescription from './prescription'
interface BookAttributes {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  age: string;
  profession: string;
  chiefComplaint: string;
  place: string
}

interface BookCreationAttributes
  extends Optional<BookAttributes, 'id'> {}

export interface PatientInstance
  extends Model<BookAttributes, BookCreationAttributes>,
    BookAttributes {
      createdAt?: Date;
      updatedAt?: Date;
}
const patient = sequelize.define<PatientInstance>('Patient', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phoneNumber: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.STRING
  },
  profession: {
    type: DataTypes.STRING
  },
  chiefComplaint: {
    type: DataTypes.STRING
  },
  place: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'patients'
})
patient.hasMany(PatientPrescription, {
  foreignKey: 'patientId'
})
export default patient
