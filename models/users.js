// we need our DB setup for
const db = require('./db.js');

function showAllUsers(req, res, next) {
  console.log('inside of /models/showAllUsers');
  db.any(`
    SELECT *
    FROM users;
  `)
  .then( data => {
    res.users = data;
    console.log('showAllUsers data -->', data);
    next();
  })
  .catch(error => next(error));
}

function showOneUser(req, res, next) {
  // console.log('inside of /models/showOneUser');
  db.one(`
    SELECT *
    FROM users
    WHERE user_id = $/id/`, req.params)
    .then( user => {
      res.user = user;
      console.log('showOneUser data -->', user);
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  showAllUsers,
  showOneUser
};
