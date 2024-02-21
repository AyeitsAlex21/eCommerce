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
        allowNull: true
    },

    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    },

    oAuthProvider : {
        type: DataTypes.STRING,
        allowNull: true
    },

    oAuthID : {
        type: DataTypes.STRING,
        allowNull: true
    },

    StreetAdress1: {
        type: DataTypes.STRING,
        allowNull: true
    },

    StreetAddress2: {
        type: DataTypes.STRING,
        allowNull: true
    },

    city: {
        type: DataTypes.STRING,
        allowNull: true
    },

    state: {
        type: DataTypes.STRING,
        allowNull: true
    },

    postalCode: {
        type: DataTypes.STRING,
        allowNull: true
    },

    country: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'Users', 
    timestamps: true 
});

module.exports = User;