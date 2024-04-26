const Sequelize = require('sequelize');
require('dotenv').config()

const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

// connect database
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
})
exports.sequelize = sequelize

exports.checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully!')
    } catch(error) {
        console.error('Unable to connect to the database:', error);
        return null
    }
}
