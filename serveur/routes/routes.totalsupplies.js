const express = require('express');
const controleurTotalSupplies = require('../controleurs/controleur.totalsupplies.js');

const routesTotalSupplies = express.Router()
routesTotalSupplies.get('/getPastValues', controleurTotalSupplies.getPastValues)
routesTotalSupplies.get('/getPastValues2', controleurTotalSupplies.getPastValues2)

module.exports = routesTotalSupplies