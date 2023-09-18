import express from 'express';
import { getPastValues, saveDataFromLCD } from '../controleurs/controleur.totalsupplies.js';

const routesTotalSupplies = express.Router()
routesTotalSupplies.get('/getPastValues', getPastValues)
routesTotalSupplies.get('/saveDataFromLCD', saveDataFromLCD)

export { routesTotalSupplies }