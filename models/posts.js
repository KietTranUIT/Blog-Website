const {sequelize} = require('./database.js')
const {DataTypes} = require('sequelize')
const user = require('./users.js')

const Post = sequelize.define('posts', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    authorId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: user.Account,
            key: 'id',
        },
    },

    parentId: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
        references: {
            model: Post,
            key: 'id',
        },
    },

    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    metaTitle: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },

    summary: {
        type: DataTypes.TEXT('tiny'),
        allowNull: true,
    },

    slug: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['slug'], 
        },

        {
            unique: false,
            fields: ['authorId'],
        },
    ]
})

