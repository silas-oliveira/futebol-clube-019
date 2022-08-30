import Clubs from '../../database/models/club';
import Matches from '../../database/models/match';
import { throwEqualTeams, throwTeamNotExist } from '../../utils/throwError/throw.error';
import { ITeamRequisition } from '../interfaces/ITeam';

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
  static async add(body: ITeamRequisition) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = body;
    await MatchesService.checkingTeamCredentials(homeTeam, awayTeam);
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

  static async checkingTeamCredentials(homeTeam: number, awayTeam: number) {
    if (homeTeam === awayTeam) throwEqualTeams();
    const verifyExistHomeTeam = await Clubs.findByPk(homeTeam);
    const verifyExistAwayTeam = await Clubs.findByPk(awayTeam);
    if (!verifyExistHomeTeam || !verifyExistAwayTeam) throwTeamNotExist();
  }
}

export default MatchesService;
