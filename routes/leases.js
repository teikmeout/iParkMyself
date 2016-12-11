// requiring express stuff
const express = require('express');
// instanciating the router version of express
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('leases getLeaseByID route works');
})

router.put('/:id', (req, res) => {
  res.send('leases PUT route works');
})

router.get('/', (req, res) => {
  res.send('leases getAll route works');
})

router.post('/', (req, res) => {
  res.send('leases POST route works');
})

module.exports = router;
