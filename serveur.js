//process.env.NODE_ENV = 'production';
require('dotenv').config({ path: './config/.env' });

const express = require('express');
const bodyParser = require('body-parser');
const routesRacine = require('./routes/routes.racine')
// const routesUtilisateur = require('./routes/routes.utilisateur')
// const routesListes = require('./routes/routes.listes')


// Message d'invite
console.log("");
console.log("==========================");
console.log("Démarrage de l'application");
console.log("==========================");
console.log("");

// Création du serveur
const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use('/', routesRacine)
// app.use('/api/utilisateurs', routesUtilisateur)
// app.use('/api/listes', routesListes)

// Serveur
app.listen(process.env.PORT, () => {
    console.log(`Serveur NodeJS démarré (port ${process.env.PORT})`)
})