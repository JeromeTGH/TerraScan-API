const express = require('express');
const controleurOraclePool = require('../controleurs/controleur.oraclepoolcontent.js');

const routesOraclePool = express.Router()
routesOraclePool.get('/getPastValues', controleurOraclePool.getPastValues)

module.exports = routesOraclePool