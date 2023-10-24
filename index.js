
const env = require('dotenv');
const serveur = require ('./serveur/serveur.js');
const logger = require('./utils/logger.js')

// Afficher le message d'invite
logger.log("");
logger.log("==========================");
logger.log("Démarrage de l'application");
logger.log("==========================");
logger.log("");


// Récupération des variables d'environnement
env.config({ path: './config/.env' })


// Démarrage du serveur
serveur.start();
