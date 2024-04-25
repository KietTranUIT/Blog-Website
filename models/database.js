const sequelize = require('sequelize');
require('dotenv').config()

const dbName = process.env.DB_NAME
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

exports.connectDatabase = async () => {
    let db = new sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: 'mysql',
    })

    try {
        await db.authenticate();
        console.log('Connection has been established successfully!')
    } catch(error) {
        console.error('Unable to connect to the database:', error);
        return null
    }
}