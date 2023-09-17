
import { env } from "./env.js";
import { serveur } from "./serveur/serveur.js";

// Afficher le message d'invite
console.log("");
console.log("==========================");
console.log("Démarrage de l'application");
console.log("==========================");
console.log("");


env();          // Récupération des variables d'environnement
serveur();      // Lance le serveur