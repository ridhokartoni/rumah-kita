const {
    DataTypes
} = require('sequelize');
const connection = require('../databases/connection');
const moment = require('moment');


const article = connection.define('article', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    linkOrigin: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            let values = this.getDataValue('content');
            return decodeURIComponent(values);
        }
    },
    
    thumbnailPicture: {
        type: DataTypes.STRING,
        allowNull: false
    },

    viewers :{ 
        type : DataTypes.INTEGER,
    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },

    userId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'user',
            key : 'id'
        }
    },

    createdAt :{
        type : DataTypes.DATE,
        get(){
            let values = this.getDataValue('createdAt');
            moment.locale('id')
            return moment(values).format('llll');
        }
    }
}, {
    freezeTableName: true,
}, );

module.exports = article