import TeamsService from '../services/teams.service';

class TeamsController {
  static list() {
    const allTeams = TeamsService.list();
    return allTeams;
  }

  static get({ id }: { [key: string]: string }) {
    const team = TeamsService.get(id);
    return team;
  }
}

export default TeamsController;
