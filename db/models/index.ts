import { Sequelize } from 'sequelize-typescript'
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')[env]

const db = new Sequelize(config)

export { db }
