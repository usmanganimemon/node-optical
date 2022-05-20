import { Request, Response } from 'express'
import AuthService from './../services/AuthService'
class AuthController {
  private authserivce: AuthService
  constructor () {
    this.authserivce = new AuthService()
  }

  async getLocationsWithTimezones (request: Request, response: Response): Promise<Response> {
    return response.status(200).json(this.authserivce.get())
  }

  async register (request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.authserivce.userRegister(request.body)
      return response.status(200).json({ message: 'Registertation is successfully', user })
    } catch (err: any) {
      return response.status(500).json({ message: err.message })
    }
  }

  async login (request: Request, response: Response): Promise<Response> {
    try {
      console.log('request.body', request.body)
      const token = await this.authserivce.login(request.body)
      if (!token) {
        return response.status(401).json({ message: 'Credentials are invalid' })
      }
      return response.status(200).json({ message: 'Login success', token })
    } catch (err: any) {
      return response.status(500).json({ message: err.message })
    }
  }

  fetchUser (request: any, response: Response): Response {
    return response.status(200).json({ user: request.user })
  }
}
export default new AuthController()
