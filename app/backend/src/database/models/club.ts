import { DataTypes, Model } from 'sequelize';
import db from '.';
import Matches from './match';

class Clubs extends Model {
  public id: number;
  public clubName: string;
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

Matches.belongsTo(Clubs, { foreignKey: 'homeTeam', as: 'homeClub' });
Matches.belongsTo(Clubs, { foreignKey: 'awayTeam', as: 'awayClub' });

Clubs.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeMatches' });
Clubs.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayMatches' });

export default Clubs;
