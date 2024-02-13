
const Cart = require("../models/cartModel");
const Item = require("../models/itemModel");
const User = require("../models/userModel");
const CartItem = require("../models/cartItemModel");
const ItemSize = require("../models/itemSizeModel");
const Order = require("../models/orderModel")

Cart.hasMany(CartItem, {foreignKey: "cartID"});
CartItem.belongsTo(Cart, {foreignKey: "cartID"});

Item.hasMany(CartItem, {foreignKey: "itemID"});
CartItem.belongsTo(Item, {foreignKey: "itemID"});

User.hasOne(Cart, {foreignKey: "userID"});
Cart.belongsTo(User, {foreignKey: "userID"});

Item.hasMany(ItemSize, {foreignKey: "itemID"});
ItemSize.belongsTo(Item, {foreignKey: "itemID"});

CartItem.belongsTo(ItemSize, {foreignKey: "sizeID"});
ItemSize.hasMany(CartItem, {foreignKey: "sizeID"});

ItemSize.hasMany(Order, {foreignKey: "itemSizeID"});
Order.belongsTo(ItemSize, {foreignKey: "itemSizeID"});

User.hasMany(Order, {foreignKey: "userID"});
Order.belongsTo(User, {foreignKey: "userID"});

module.exports = {Cart, Item, User, CartItem, ItemSize, Order};