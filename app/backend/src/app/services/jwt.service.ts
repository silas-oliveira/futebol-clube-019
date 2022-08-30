import jwt = require('jsonwebtoken');
import 'dotenv/config';
import { throwExpiredOrInvalidToken, throwInvalidToken } from '../../utils/throwError/throw.error';
import IUser from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || 'super_secret';

class JwtService {
  static createToken(user: Omit<IUser, 'password'>) {
    const token = jwt.sign({ data: user }, secret, {
      expiresIn: '7h',
      algorithm: 'HS256',
    });
    return token;
  }

  static validateToken(token: string) {
    try {
      const { data }: any = jwt.verify(token, secret);
      return data;
    } catch (error) {
      throwExpiredOrInvalidToken();
    }
  }

  static validateTokenByInsertMatch(token: string) {
    try {
      const { data }: any = jwt.verify(token, secret);
      return data;
    } catch (error) {
      throwInvalidToken();
    }
  }
}

export default JwtService;
