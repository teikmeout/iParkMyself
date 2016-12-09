// requiring express
const express = require('express');
// using the router instanciation
const router = express.Router();

// show user by ID
router.get('/:id', (req, res) => {
  res.send('getuser by ID users route works');
})

// edit user by ID
router.put('/:id', (req, res) => {
  res.send('put user route works');
})

// get All users
router.get('/', (req, res) => {
  res.send('get All users works');
})

// post new user
router.post('/', (req, res) => {
  res.send('POST users route works');
})

// exporting that stuff
module.exports = router;

