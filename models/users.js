// we need our DB setup for
const db = require('./db.js');

function showAllUsers(req, res, next) {
  console.log('===>> inside of /models/showAllUsers');
  db.many(`
    SELECT *
    FROM users;
  `)
  .then( data => {
    res.usuarios = data;
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

function addOneUser(req, res, next) {
  db.one(`
    INSERT INTO users
    (username, f_name, l_name, email, pass, type) VALUES
    ($/username/, $/f_name/, $/l_name/, $/email/, $/pass/, '1')
    RETURNING *;
    `, req.body)
  .then( newuser => {
    res.newuser = newuser;
    console.log('new user created -->', newuser);
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  showAllUsers,
  showOneUser,
  addOneUser
};
