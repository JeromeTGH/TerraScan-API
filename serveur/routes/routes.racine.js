import express from 'express';
import { getRoot } from '../controleurs/controleur.test.js';

const routesRacine = express.Router()
routesRacine.get('/', getRoot)

export { routesRacine }