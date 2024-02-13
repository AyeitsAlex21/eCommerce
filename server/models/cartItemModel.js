const  DataTypes  = require('sequelize');
const sequelize = require('../config/db');

const CartItem = sequelize.define('CartItem', { 
    cartItemID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    itemID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    itemSizeID: {
        type: DataTypes.INTEGER,
        allowNull:false
    },

    cartID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    bought: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    dateAdded: {
        type: DataTypes.DATE,
        allowNull: false
    },

    dateBought: {
        type:DataTypes.DATE,
        allowNull: true
    }
   
}, {
    tableName: 'CartItems', 
    timestamps: true 
});

module.exports = CartItem;