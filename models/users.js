const {sequelize} = require('./database.js')
const {DataTypes} = require('sequelize')

const Token = sequelize.define('tokens', {
    userId: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },

    token: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
    },

    expireAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {

    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  
    // If don't want createdAt
    createdAt: false,
  
    // If don't want updatedAt
    updatedAt: false,
  
    // your other configuration here
  
  })

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