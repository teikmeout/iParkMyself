// requiring express
const express = require('express');
// using the router instanciation
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get All users works');
})

router.post('/', (req, res) => {
  res.send('POST users route works');
})

module.exports = router;

