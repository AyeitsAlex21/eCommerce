const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ItemSize = sequelize.define('ItemSize', { 
    sizeID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    itemID: {
        type:DataTypes.INTEGER,
        allowNull:false
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ItemSizes', 
    timestamps: true 
  });

module.exports = ItemSize;