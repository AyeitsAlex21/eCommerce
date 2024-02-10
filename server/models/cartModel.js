const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cart = sequelize.define('Cart', { 
    cartID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'carts', 
    timestamps: true 
});

module.exports = Cart;