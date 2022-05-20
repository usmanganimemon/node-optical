import { Model, DataTypes } from 'sequelize'
import sequelize from './index'
import { UserAttributes, UserCreationAttributes } from '../types/user'
class User extends Model <UserAttributes, UserCreationAttributes> {
  declare id: number
  declare firstName: string
  declare email: string
  declare password: string
  declare lastName: string
}
User.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user'
})
export default User
