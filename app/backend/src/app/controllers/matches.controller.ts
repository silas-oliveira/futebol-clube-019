import MatchesService from '../services/matches.service';

class MatchesController {
  static async list() {
    const allMatches = await MatchesService.list();
    return allMatches;
  }
}

export default MatchesController;
