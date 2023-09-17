import express from 'express';
import { getRoot } from '../controleurs/controleur.racine.js';

const routesRacine = express.Router()
routesRacine.get('/', getRoot)

export { routesRacine }