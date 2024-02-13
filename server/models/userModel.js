const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', { 
    userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    passwordHash: {
        type: DataTypes.STRING,
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastLogin: {
        type: DataTypes.DATE,
        allowNull: false
    },

    oAuthProvider : {
        type: DataTypes.STRING,
        allowNull: false
    },

    oAuthID : {
        type: DataTypes.STRING,
        allowNull: false
    },

    StreetAdress1: {
        type: DataTypes.STRING,
        allowNull: false
    },

    StreetAddress2: {
        type: DataTypes.STRING,
        allowNull: false
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false
    },

    state: {
        type: DataTypes.STRING,
        allowNull: false
    },

    postalCode: {
        type: DataTypes.STRING,
        allowNull: false
    },

    country: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'Users', 
    timestamps: true 
});

module.exports = User;