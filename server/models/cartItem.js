const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CartItem = sequelize.define('CartItem', { 
    cartItemID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    itemId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cartID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
   
}, {
    tableName: 'cartItems', 
    timestamps: true 
});

CartItem.belongsTo(Cart, {
    
})

module.exports = CartItem;