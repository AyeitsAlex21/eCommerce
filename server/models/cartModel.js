const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cart = sequelize.define('Cart', { 
    cartID: {
        type: DataTypes.Integer,
        autoIncrement: true,
        primaryKey: true
    },

    userID: {
        type: DataTypes.Integer,
        allowNull: false
    },

    itemID: {
        type: DataTypes.Integer,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    tableName: 'carts', 
    timestamps: true 
});

module.exports = Cart;