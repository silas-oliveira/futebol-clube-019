import QueryString = require('qs');
import Clubs from '../../database/models/club';
import Matches from '../../database/models/match';
import { throwEqualTeams } from '../../utils/throwError/throw.error';

class MatchesService {
  static async list(inProgress: any) {
    const allMatches = await Matches.findAll({
      include: [
        { model: Clubs, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Clubs, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return inProgress
      ? allMatches.filter((m) => `${m.inProgress}` === inProgress)
      : allMatches;
  }

  // verificar como esse simples add adiciona todas as chaves relacionadas a associação;
  static async add(body: QueryString.ParsedQs) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = body;
    if (homeTeam === awayTeam) throwEqualTeams();
    const result = await Matches.create({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress: true,
    });
    return result;
  }

  static async update(id: string) {
    await Matches.update(
      { inProgress: false },
      {
        where: {
          id,
        },
      },
    );
  }
}

export default MatchesService;
