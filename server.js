'use strict'

// requiring express
const express = require('express');
// intance of morgan for server logs
const logger = require('morgan');

// initializing an instance of express
const app = express();
// selecting options for morgan
app.use(logger('dev'));

// determining port config, heroku considerations
const PORT = process.argv[2] || process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'dist')));

// setting the server to listen on PORT
app.listen(PORT, () => console.log(`proyecturune on ${PORT}`))

// setting up routes
const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');
app.use('/', homeRoute);
app.use('/users', usersRoute);
