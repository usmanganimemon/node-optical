import { UserAttributes } from '../types/user'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
class AuthService {
  get () {
    const locations = [
      {
        location: 'Germany',
        timezoneName: 'Central European Time',
        timezoneAbbr: 'CET',
        utcOffset: 1
      },
      {
        location: 'China',
        timezoneName: 'China Standard Time',
        timezoneAbbr: 'CST',
        utcOffset: 8
      },
      {
        location: 'Argentina',
        timezoneName: 'Argentina Time',
        timezoneAbbr: 'ART',
        utcOffset: -3
      },
      {
        location: 'Japan',
        timezoneName: 'Japan Standard Time',
        timezoneAbbr: 'JST',
        utcOffset: 9
      }
    ]
    return locations
  }

  async userRegister (data: UserAttributes) {
    data.password = bcrypt.hashSync(data.password, 10)
    const user = await User.create(data)
    return user
  }

  async login (data: UserAttributes) {
    const user: UserAttributes | null = await User.findOne({ where: { email: data.email }, raw: true })
    if (user && bcrypt.compareSync(data.password, user!.password)) {
      const secret: string = process.env.JWT_SECRET_KEY!
      const token: string = jwt.sign(user!, secret)
      return token
    } else {
      return false
    }
  }

  fetchUser (token: string) {
    const secret: string = process.env.JWT_SECRET_KEY!
    const decode = jwt.verify(token, secret)
    console.log('decode', decode)
    return decode
  }
}
export default AuthService
