'use strict'
const Models = require("../models")

const getCartItem = (res) => {
  Models.CartItem.findAll({}).then(data => {
    res.send({result: 200, data: data})
  }).catch(error => {
    console.log(error)
    res.send({result: 500, error: error.message})
  })
}
const getCartItemByCart = (param, res) => {
  Models.CartItem.findAll({where: param}).then(data => {
    res.send({result: 200, data: data})
  }).catch(error => {
    console.log(error)
    res.send({result: 500, error: error.message})
  })
}

const createCartItem = (params, res) => {
  Models.CartItem.create(params).then(data => {
    res.send({ result: 200 , data: data});
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  })
}

const deleteCartItem = (req, res) => {
  Models.CartItem.destroy({ where: req.params })
    .then(data => {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCartItem, createCartItem, deleteCartItem, getCartItemByCart
}