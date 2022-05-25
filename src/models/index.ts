import { Sequelize } from 'sequelize-typescript'
const sequelize = new Sequelize('testDB', 'root', 'Jabu@1994', {
  host: 'localhost',
  dialect: 'mysql'
})
export default sequelize
