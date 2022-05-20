import { Response } from 'express'
class ResponseService {
  mapResponse (statusCode: number, res: any, response: Response) {
    if (typeof res === 'string') {
      return response.status(statusCode).json({ message: res })
    } else {
      return response.status(statusCode).json({ data: res })
    }
  }
}
export default new ResponseService()
