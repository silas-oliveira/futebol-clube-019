import * as QueryString from 'qs';
import MatchesService from '../services/matches.service';

class MatchesController {
  static async list({ inProgress }: QueryString.ParsedQs) {
    const allMatches = await MatchesService.list(inProgress);
    return allMatches;
  }
}

export default MatchesController;
