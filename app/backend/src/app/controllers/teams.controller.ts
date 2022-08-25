import TeamsService from '../services/teams.service';

class TeamsController {
  static async list() {
    const allTeams = await TeamsService.list();
    return allTeams;
  }

  static async get({ id }: { [key: string]: string }) {
    const team = await TeamsService.get(id);
    return team;
  }
}

export default TeamsController;
