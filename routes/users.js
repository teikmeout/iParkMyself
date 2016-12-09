// requiring express
const express = require('express');
// using the router instanciation
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get All users works');
})

module.exports = router;

