const express = require('express');
const {fetchData,addCompanyData} = require('../controllers/ipo.controllers');

const route = express.Router();

route.get('/details',fetchData);
route.post('/details',addCompanyData);

module.exports = route;