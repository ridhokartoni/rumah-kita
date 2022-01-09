const {
    DataTypes
} = require('sequelize');
const connection = require('../databases/connection');


const savedArticle = connection.define('savedArticle', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    articleId: {
        type: DataTypes.INTEGER,
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
    }
}, {
    freezeTableName: true
});

module.exports = savedArticle