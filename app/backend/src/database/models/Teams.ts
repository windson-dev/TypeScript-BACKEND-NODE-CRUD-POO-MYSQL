import { Model, STRING } from 'sequelize';
import db from '.';

export default class Teams extends Model {
  public teamName!: string;
}

Teams.init({
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});
