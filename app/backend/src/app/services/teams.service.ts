import Clubs from '../../database/models/club';

class TeamsService {
  static async list() {
    const allTeams = await Clubs.findAll();
    return allTeams;
  }

  static async get(id: string) {
    const team = await Clubs.findByPk(id);
    return team;
  }
}

export default TeamsService;
