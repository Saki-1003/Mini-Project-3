const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
  Controllers.cartItemController.getCartItem(res);
})
router.get('/:CartID', (req, res) => {
  Controllers.cartItemController.getCartItemByCart(req.params, res);
})

router.post('/create/:CartID/:ProductID', (req, res) => {
  Controllers.cartItemController.createCartItem(req.params, res)
})

router.delete('/delete/:CartID/:ProductID', (req, res) => {
  Controllers.cartItemController.deleteCartItem(req, res)
})

module.exports = router;