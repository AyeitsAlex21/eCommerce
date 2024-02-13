const  DataTypes  = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', { 
    orderID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    itemSizeID: {
        type: DataTypes.INTEGER,
        allowNull:false
    },

    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type:DataTypes.DECIMAL,
        allowNull: false
    },

    ifShipped: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    shippingTrackingNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },

    ifArrived: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    dateBought: {
        type: DataTypes.DATE,
        allowNull: false
    },

    dateShipped: {
        type: DataTypes.DATE,
        allowNull: true
    },

    dateArrived: {
        type: DataTypes.DATE,
        allowNull: true
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
    tableName: 'Orders', 
    timestamps: true 
});

module.exports = Order;