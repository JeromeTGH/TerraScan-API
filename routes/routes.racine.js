const routeur = require('express').Router()
const controleurTest = require('../controleurs/controleur.test')

routeur.get('/', controleurTest.getRoot)

module.exports = routeur