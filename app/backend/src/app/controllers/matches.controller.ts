import { IncomingHttpHeaders } from 'http';
import * as QueryString from 'qs';
import { throwTokenNotFound } from '../../utils/throwError/throw.error';
import { ITeamRequisition } from '../interfaces/ITeam';
import AuthService from '../services/auth.service';
import JwtService from '../services/jwt.service';
import MatchesService from '../services/matches.service';

class MatchesController {
  static async list({ inProgress }: QueryString.ParsedQs) {
    const allMatches = await MatchesService.list(inProgress);
    return allMatches;
  }

  static async add(body: ITeamRequisition, headers: IncomingHttpHeaders) {
    const { authorization } = headers;
    if (authorization === undefined) return throwTokenNotFound();
    JwtService.validateTokenByInsertMatch(authorization);
    AuthService.validateToken(authorization);
    const allMatches = await MatchesService.add(body);
    return allMatches;
  }

  static async update({ id }: { [key: string]: string }) {
    await MatchesService.update(id);
    return { message: 'Finished' };
  }

  static async updateInProgress(
    { id }: { [key: string]: string },
    body: { [key: string]: number },
  ) {
    await MatchesService.updateInProgress(id, body);
    return { message: 'Updated' };
  }
}

export default MatchesController;
