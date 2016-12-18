'use strict'

if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
// requiring express
const express = require('express');
// intance of morgan for server logs
const logger = require('morgan');
// req path to get things done
const path = require('path');
// req body -parser cause I just had forgotten before
const bodyParser = require('body-parser');

// initializing an instance of express
const app = express();
// determining port config, heroku considerations
const PORT = process.argv[2] || process.env.PORT || 3000;
// setting the server to listen on PORT
app.listen(PORT, () => console.log(`proyecturune on ${PORT}`))


// app.use(express.static(path.join(__dirname, 'dist')));

// selecting options for morgan
app.use(logger('dev'));

// giving out app the setting of bodyparser to only take json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

// setting up routes
// const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');
const leasesRoute = require('./routes/leases');
app.use('/users', usersRoute);
app.use('/leases', leasesRoute);
// app.use('/', homeRoute);
