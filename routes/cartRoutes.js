const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
  Controllers.cartController.getUser(res);
})

router.post('/create', (req, res) => {
  Controllers.cartController.createUser(req.body, res)
})

router.put('/:id', (req, res) => {
  Controllers.cartController.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
  Controllers.cartController.deleteUser(req, res)
})

module.exports = router;