import Clubs from '../../database/models/club';

class TeamsService {
  static async list() {
    const allTeams = await Clubs.findAll();
    return allTeams;
  }
}

export default TeamsService;
