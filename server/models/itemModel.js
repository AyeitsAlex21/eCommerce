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

  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },

  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true // Allow null value
  }
}, {
  tableName: 'Items', 
  timestamps: true 
});

module.exports = Item;