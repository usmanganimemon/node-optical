import { Optional, Model } from 'sequelize'
export type patientType = {
    id: string,
    email: string,
    phoneNumber: number,
    name: string,
    age: number,
    profession: string,
    chiefComplaint: string,
    place: string,
    createdAt: Date,
    updatedAt: Date
}
export interface Prescription{
    id: number;
    patientId:string;
    rightSph: number;
    rightCyl: number;
    rightAxis: number;
    rightAdd: number;
    leftSph: number;
    leftCyl: number;
    leftAxis: number;
    leftAdd: number;
}
export interface PrescriptionCreationAttributes extends Optional<Prescription, 'id'> {}
export interface PrescriptionInstance extends Model<Prescription, PrescriptionCreationAttributes> {}
