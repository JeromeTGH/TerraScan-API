import express from 'express';
import { getAll } from '../controleurs/controleur.totalsupplies.js';

const routesTotalSupplies = express.Router()
routesTotalSupplies.get('/getAll', getAll)

export { routesTotalSupplies }