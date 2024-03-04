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
    type: DataTypes.DECIMAL,
    allowNull: false
  },

  active: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },

  imagePath: {
    type: DataTypes.STRING,
    allowNull: false // Allow null value
  }
}, {
  tableName: 'Items', 
  timestamps: true 
});

module.exports = Item;