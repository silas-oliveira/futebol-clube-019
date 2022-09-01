import { QueryTypes } from 'sequelize';
import sequelize from '../../database/models';

class LeaderboardHomeService {
  // static createInstance() {
  //   const sequelize = new Sequelize(config);
  //   return sequelize;
  // }

  static async list() {
    const result = await
    sequelize.query(`SELECT name,((totalVictories * 3) + totalDraws) AS 
    totalPoints,totalGames,totalVictories,totalDraws,totalLosses,goalsFavor,goalsOwn,
goalsFavor - goalsOwn AS goalsBalance,
  ROUND((totalPoints/(totalGames * 3)) * 100, 2) as efficiency
FROM(SELECT ((totalVictories * 3) + totalDraws) AS totalPoints,
  name,totalGames,totalVictories,totalDraws,totalLosses,
  goalsFavor,goalsOwn,goalsFavor - goalsOwn AS goalsBalance
FROM(SELECT t.team_name AS name,
SUM(m.home_team_goals > m.away_team_goals) AS totalVictories,
SUM(m.home_team_goals = m.away_team_goals) AS totalDraws,
SUM(m.home_team_goals < m.away_team_goals) AS totalLosses,
SUM(m.home_team_goals) AS goalsFavor,
SUM(m.away_team_goals) AS goalsOwn,COUNT(*) AS totalGames FROM TRYBE_FUTEBOL_CLUBE.teams t
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches m ON t.id = m.home_team 
WHERE m.in_progress = 0 GROUP BY t.team_name) AS dd) AS d`, { type: QueryTypes.SELECT });
    return result;
  }

  static async orderByRequirements() {
    const listOfLeaderBoard: any = await LeaderboardHomeService.list();
    const order = listOfLeaderBoard
      .sort((a: any, b: any) => {
        if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
        if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
        if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
        if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
        if (a.goalsOwn !== b.goalsOwn) return b.goalsOwn - a.goalsOwn;
        return 0;
      });
    return order;
  }
}

export default LeaderboardHomeService;
