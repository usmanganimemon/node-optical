import { Sequelize } from 'sequelize-typescript'
const sequelize = new Sequelize('practice', 'root', 'root@123', {
  host: 'localhost',
  dialect: 'mysql'
})
export default sequelize
