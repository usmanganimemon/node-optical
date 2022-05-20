import express from 'express'
import authRouter from './routes/auth'
import patientRouter from './routes/patient'
import bodyParser from 'body-parser'
import db from './models'
import cors from 'cors'
// import { authJWT } from './middleware/authToken'
import 'dotenv/config'
const app = express()
app.use(cors({
  origin: '*'
}))
const port = 3000
app.use(bodyParser.json())
// db.authenticate().then(() => {
//   console.log('Database connected...')
// }).catch(err => {
//   console.log('Error: ' + err)
// })
app.use('/', authRouter)
app.use('/patient', patientRouter)
app.listen(port, '0.0.0.0', () => {
  console.log(`Timezones by location application is running on port ${port}.`)
})
