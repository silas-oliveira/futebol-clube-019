import LeaderboardHomeService from '../services/leaderboardHome.service';

class LeaderboardHomeController {
  static async list() {
    const result = LeaderboardHomeService.orderByRequirements();
    return result;
  }
}

export default LeaderboardHomeController;
