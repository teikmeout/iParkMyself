// requiring express
const express = require('express');
// using the router instanciation
const router = express.Router();
const { showAllUsers,showOneUser,addOneUser } = require('../models/users');

// show user by ID
router.get('/:id', showOneUser, (req, res) => {
  console.log('does this ever display?');
  res.json(res.user);
  // res.send('getuser by ID users route works');
})

// edit user by ID
router.put('/:id', (req, res) => {
  res.send('put user route works');
})

// get All users
router.get('/', showAllUsers, (req, res) => {
// router.get('/', (req, res) => {
  res.json(res.usuarios);
  // res.send('get All users works');
})

// post new user
router.post('/', addOneUser, (req, res) => {
  res.send('POST users route works');
})

// exporting that stuff
module.exports = router;

