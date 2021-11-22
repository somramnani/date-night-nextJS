import { DataTypes, Optional, Model, Sequelize } from 'sequelize'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]

const sequelize = new Sequelize(config)

export interface UserAttributes {
  id?: number
  name: string
  email: string
  password: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number
  public name!: string
  public email!: string
  public password!: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    modelName: 'Users',
    sequelize,
    timestamps: true,
  }
)
