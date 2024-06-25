const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
  Controllers.cartController.getCart(res);
})

router.post('/create/:user_id', (req, res) => {
  Controllers.cartController.createCart(req.params.user_id, res)
})

router.delete('/:id', (req, res) => {
  Controllers.cartController.deleteCart(req, res)
})

module.exports = router;