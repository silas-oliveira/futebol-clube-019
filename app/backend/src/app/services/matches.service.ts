import Clubs from '../../database/models/club';
import Matches from '../../database/models/match';

class MatchesService {
  static async list() {
    const allMatches = await Matches.findAll({
      include: [
        { model: Clubs, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Clubs, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return allMatches;
  }
}

export default MatchesService;
