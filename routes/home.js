const router = require('express').Router();

router.use('/', (req, res) => {
  res.send('this works!');
})

module.exports = router;
