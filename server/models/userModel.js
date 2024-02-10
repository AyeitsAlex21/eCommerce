const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', { 
    userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    oAuthProvider : {
        type: DataTypes.STRING,
        allowNull: false
    },

    oAuthID : {
        type: Datatypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users', 
    timestamps: true 
});

module.exports = User;