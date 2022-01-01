const {
    DataTypes
} = require('sequelize');
const connection = require('../databases/connection');


const comment = connection.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'article',
            key: 'id'
        }
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    comment: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

module.exports = comment