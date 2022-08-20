import User from '../../database/models/user';
import loginSchema from '../../utils/schemas/login.schema';
import ILogin from '../interfaces/ILogin';
import AuthService from '../services/auth.service';
import { IService } from '../services/IService/IService';

export default class UserController {
  constructor(private userService: IService<User>) { }

  static async login(body: ILogin) {
    // responsabilidade unica
    const { email, password } = body;
    const { error } = loginSchema.validate({ email, password });
    if (error) throw error;
    const token = await AuthService.validateCredentials({ email, password });
    return token;
  }
}
