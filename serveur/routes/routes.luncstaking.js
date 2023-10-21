const express = require('express');
const controleurLuncStaking = require('../controleurs/controleur.luncstaking.js');

const routesLuncStaking = express.Router()
routesLuncStaking.get('/getPastValues', controleurLuncStaking.getPastValues)

module.exports = routesLuncStaking