import jwt = require('jsonwebtoken');
import 'dotenv/config';
import { throwExpiredOrInvalidToken } from '../../utils/throwError/throw.error';

const secret = process.env.JWT_SECRET || 'super_secret';

class jwtService {
  static createToken(user: string) {
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
}

export default jwtService;
