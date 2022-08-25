import TeamsService from '../services/teams.service';

class TeamsController {
  static list() {
    const allTeams = TeamsService.list();
    return allTeams;
  }
}

export default TeamsController;
