const express = require('express');
const controleurTotalSupplies = require('../controleurs/controleur.totalsupplies.js');

const routesTotalSupplies = express.Router()
routesTotalSupplies.get('/getPastValues', controleurTotalSupplies.getPastValues)

module.exports = routesTotalSupplies