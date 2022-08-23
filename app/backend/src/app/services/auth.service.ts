import 'dotenv/config';
import User from '../../database/models/user';
import {
  throwEmailOrPasswordIncorrect,
  throwTokenNotFound,
} from '../../utils/throwError/throw.error';
import ILogin from '../interfaces/ILogin';
import JwtService from './jwt.service';
import PasswordService from './password.service';

class AuthService {
  // funcoes menores
  static async validateCredentials({ email, password }: ILogin) {
    const user: any = await User.findOne({ where: { email } });
    if (!user) throwEmailOrPasswordIncorrect();

    await PasswordService.checkPassword(password, user.password);
    const { id, role, username } = user;

    const token = JwtService.createToken({ id, email, role, username });
    return token;
  }

  static validateToken(token: string) {
    if (!token) throwTokenNotFound();
    const user = JwtService.validateToken(token);
    return user;
  }
}

export default AuthService;
