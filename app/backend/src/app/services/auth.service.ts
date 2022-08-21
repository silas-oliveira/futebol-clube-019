import 'dotenv/config';
import User from '../../database/models/user';
import { throwTokenNotFound, throwUnauthorizedError } from '../../utils/throwError/throw.error';
import ILogin from '../interfaces/ILogin';
import JwtService from './jwt.service';
import PasswordService from './password.service';

class AuthService {
  // funcoes menores
  static async validateCredentials({ email, password }: ILogin) {
    const user: any = await User.findOne({ where: { email } });
    if (!user) throwUnauthorizedError();

    await PasswordService.checkPassword(password, user.password);
    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = JwtService.createToken(userWithoutPassword);
    return token;
  }

  static validateToken(token: string) {
    if (!token) throwTokenNotFound();
    const user = JwtService.validateToken(token);
    return user;
  }
}

export default AuthService;
