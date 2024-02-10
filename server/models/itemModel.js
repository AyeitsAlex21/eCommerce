const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Item = sequelize.define('Item', {
  // Model attributes are defined here
  itemID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true // Allow null value
  },

  price: {
    type: DataTypes.DECIMAL(10, 2), // Supports values up to 99999999.99
    allowNull: false
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true // Allow null value
  }
}, {
  tableName: 'items', 
  timestamps: true 
});

module.exports = Item;