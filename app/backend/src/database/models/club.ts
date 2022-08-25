import { DataTypes, Model } from 'sequelize';
import db from '.';
import Matches from './match';

class Clubs extends Model {
  public id: number;
  public teamName: string;
}

Clubs.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  teamName: DataTypes.STRING,

}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Matches.belongsTo(Clubs, { foreignKey: 'home_team', as: 'teamHome' });
Matches.belongsTo(Clubs, { foreignKey: 'away_team', as: 'teamAway' });

Clubs.hasMany(Matches, { foreignKey: 'home_team', as: 'homeMatches' });
Clubs.hasMany(Matches, { foreignKey: 'away_team', as: 'awayMatches' });

export default Clubs;
