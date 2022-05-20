import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
export const authJWT = (request: Request | any, response: Response, next: NextFunction):any => {
  try {
    const authHeader: string = request.headers.authorization!
    if (authHeader) {
      const token = authHeader.split(' ')[1]
      const secret: string = process.env.JWT_SECRET_KEY!
      const decode = jwt.verify(token, secret)
      if (decode) {
        request.user = decode
        next()
      } else {
        throw new Error('Unauthorized')
      }
    } else {
      throw new Error('Unauthorized')
    }
  } catch (err) {
    return response.sendStatus(401)
  }
}
