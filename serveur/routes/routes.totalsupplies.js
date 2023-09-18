import express from 'express';
import { getPastValues } from '../controleurs/controleur.totalsupplies.js';

const routesTotalSupplies = express.Router()
routesTotalSupplies.get('/getPastValues', getPastValues)

export { routesTotalSupplies }