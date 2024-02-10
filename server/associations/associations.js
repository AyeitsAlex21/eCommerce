
const Cart = require("../models/cartModel");
const Item = require("../models/itemModel");
const User = require("../models/userModel");
const CartItem = require("../models/cartItemModel");

Cart.hasMany(CartItem, {foreignKey: "cartID"});
CartItem.belongsTo(Cart, {foreignKey: "cartID"});

Item.hasMany(CartItem, {foreignKey: "itemID"});
CartItem.belongsTo(Item, {foreignKey: "itemID"});

Item.hasOne(Cart, {foreignKey: "itemID"});
console.log("HEY")
Cart.belongsTo(Item, {foreignKey: "itemID"});

User.hasOne(Cart, {foreignKey: "userID"});
Cart.belongsTo(User, {foreignKey: "userID"});

module.exports = {Cart, Item, User, CartItem};