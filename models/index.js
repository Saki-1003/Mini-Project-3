'use strict'

const Product = require('./product')
const User = require('./user')
const Cart = require('./cart')
const setData = require('../setData')
const setUser = require('../setUser')

async function init() {
  User.hasOne(Cart, {foreignKey: "UserID"})
  Cart.belongsTo(User, {foreignKey: "UserID"})

  Cart.hasMany(Product, {foreignKey: "CartID"})
  Product.belongsTo(Cart, {foreignKey: "CartID"})

  await Product.sync()
  await User.sync()
  await Cart.sync()
  await setData(Product)
  await setUser(User)
};

init();

module.exports = {
  Product,
  User
}