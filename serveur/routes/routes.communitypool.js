const express = require('express');
const controleurCommunityPool = require('../controleurs/controleur.communitypoolcontent.js');

const routesCommunityPool = express.Router()
routesCommunityPool.get('/getPastValues', controleurCommunityPool.getPastValues)

module.exports = routesCommunityPool