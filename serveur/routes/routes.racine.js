const express = require('express');
const controleurRacine = require('../controleurs/controleur.racine.js');

const routesRacine = express.Router()
routesRacine.get('/', controleurRacine.getRoot)

module.exports = routesRacine