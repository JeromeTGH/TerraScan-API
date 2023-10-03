const express = require('express');
const controleurTotalSupplies = require('../controleurs/controleur.totalsupplies.js');

const routesTotalSupplies = express.Router()
routesTotalSupplies.get('/getPastValues', controleurTotalSupplies.getPastValues)
// routesTotalSupplies.get('/saveDataFromLCD', controleurTotalSupplies.saveDataFromLCD)

module.exports = routesTotalSupplies