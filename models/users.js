const {sequelize} = require('./database.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    firstName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },

    lastName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    intro: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },

    profile: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    avartar: {
        type: DataTypes.STRING(100),
        defaultValue: '/avartar.jpg',
    },

    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
    }
}, {
    idnexes: [
        {
            unique: true,
            fields: ['email'],
        },
    ]
})
module.exports = {User}