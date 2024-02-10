const Cart = require("../model/cartModel");
const Item = require("../model/itemModel");
const User = require("../model/userModel");
const CartItem = require("../model/cartItemModel");

Cart.hasMany(CartItem, {foreignKey: "cartID"});
CartItem.belongsTo(Cart, {foreignKey: "cartID"});

Item.hasMany(CartItem, {foreignKey: "itemID"});
CartItem.belongsTo(Item, {foreignKey: "itemID"});

Item.hasOne(Cart, {foreignKey: "itemID"});
Cart.belongsTo(Item, {foreignKey: "itemID"});

User.hasOne(Cart, {foreignKey: "userID"});
Cart.belongsTo(User, {foreignKey: "userID"});

module.exports({Cart, Item, User, CartItem});