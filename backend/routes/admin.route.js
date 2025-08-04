const express = require('express');
const { signinAdmin, signupAdmin } = require('../controllers/admin.controllers');

const route = express();

route.post('/signin',signinAdmin);
route.post('/signup',signupAdmin);

module.exports = route;