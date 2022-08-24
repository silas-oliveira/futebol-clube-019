import JwtService from './jwt.service';

class LoginValidateService {
  static verifyToken(token: string) {
    const verify = JwtService.validateToken(token);
    return verify;
  }
}

export default LoginValidateService;
