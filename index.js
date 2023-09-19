
import { env } from "./utils/env.js";
import { app } from "./app.js";
import { serveur } from "./serveur/serveur.js";


// Afficher le message d'invite
console.log("");
console.log("==========================");
console.log("Démarrage de l'application");
console.log("==========================");
console.log("");


env();          // Récupération des variables d'environnement
app();          // Lancement de fonctions auxiliaires
serveur();      // Démarrage du serveur
