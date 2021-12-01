import { Sequelize } from 'sequelize'
import { User } from './models/User'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/./config/config.js')[env]

const sequelize = new Sequelize(config)

export { User }

function initModels(sequelize: Sequelize) {
  User.initModel(sequelize)

  return { User }
}

initModels(sequelize)

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
}

export default db
