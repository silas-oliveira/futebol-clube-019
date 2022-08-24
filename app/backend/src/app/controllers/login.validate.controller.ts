import LoginValidateService from '../services/login.validate.service';

class LoginValidateController {
  static verifyToken(headers: any) {
    const { authorization } = headers;
    const { email } = LoginValidateService.verifyToken(authorization);
    if (email.includes('admin')) {
      return 'admin';
    }
    return 'user';
  }
}

export default LoginValidateController;
