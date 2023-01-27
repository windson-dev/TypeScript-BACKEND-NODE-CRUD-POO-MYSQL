import { Model, STRING } from 'sequelize';
import db from '.';

export default class User extends Model {
  public username!: string;
  public role!: string;
  public email!: string;
  public password!: string;
}

User.init({
  username: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});
