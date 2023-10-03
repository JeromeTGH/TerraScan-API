
const env = require('dotenv');
const serveur = require ('./serveur/serveur.js');


// Afficher le message d'invite
console.log("");
console.log("==========================");
console.log("Démarrage de l'application");
console.log("==========================");
console.log("");


// Récupération des variables d'environnement
env.config({ path: './config/.env' })


// Démarrage du serveur
serveur.start();
