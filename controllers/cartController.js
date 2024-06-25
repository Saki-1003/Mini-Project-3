'use strict'
const Models = require("../models")

const getCart = (res) => {
  Models.Cart.findAll({}).then(data => {
    res.send({result: 200, data: data})
  }).catch(error => {
    console.log(error)
    res.send({result: 500, error: error.message})
  })
}

const createCart = (UserID, res) => {
  Models.Cart.create({UserID}).then(data => {
    res.send({ result: 200 , data: data});
  }).catch(err => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  })
}

const deleteCart = (req, res) => {
  Models.Cart.destroy({ where: { CartId: req.params.id } })
    .then(data => {
      res.send({ result: 200, data: data });
    }).catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCart, createCart, deleteCart
}