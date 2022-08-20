import bcrypt = require('bcryptjs');
import { throwUnauthorizedError } from '../../utils/throwError/throw.error';

class PasswordService {
  static encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    return encryptedPassword;
  }

  static async checkPassword(password: string, passwordDb: string) {
    const comparePassword = await bcrypt.compare(password, passwordDb);
    console.log('compare', comparePassword);

    if (!comparePassword) throwUnauthorizedError();
  }
}

export default PasswordService;
