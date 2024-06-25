'use strict'

const Product = require('./product')
const User = require('./user')
const Cart = require('./cart')
const CartItem = require('./cartItem')
const setData = require('../setData')
const setUser = require('../setUser')

async function init() {
  User.hasOne(Cart, {foreignKey: "UserID"})

  Cart.hasMany(CartItem, {foreignKey: "CartID"})
  Product.hasMany(CartItem, {foreignKey: "ProductID"})

  await User.sync()
  await Cart.sync()
  await Product.sync()
  await CartItem.sync()
  await setData(Product)
  await setUser(User)
};

init();

module.exports = {
  Product,
  User,
  Cart,
  CartItem
}