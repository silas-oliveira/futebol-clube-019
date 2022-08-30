import { IncomingHttpHeaders } from 'http';
import * as QueryString from 'qs';
import { throwTokenNotFound } from '../../utils/throwError/throw.error';
import AuthService from '../services/auth.service';
import MatchesService from '../services/matches.service';

class MatchesController {
  static async list({ inProgress }: QueryString.ParsedQs) {
    const allMatches = await MatchesService.list(inProgress);
    return allMatches;
  }

  static async add(body: QueryString.ParsedQs, headers: IncomingHttpHeaders) {
    const { authorization } = headers;
    if (authorization === undefined) return throwTokenNotFound();
    AuthService.validateToken(authorization);
    const allMatches = await MatchesService.add(body);
    return allMatches;
  }
}

export default MatchesController;
