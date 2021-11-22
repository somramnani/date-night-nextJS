import User from '../models/User'

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'date_night_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    models: [User],
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'date_night_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'date_night_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}
