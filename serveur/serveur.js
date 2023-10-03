const bodyParser = require('body-parser');
const express = require('express');
const routesRacine = require('./routes/routes.racine.js');
const routesTotalSupplies = require('./routes/routes.totalsupplies.js');


const start = () => {

    // Création du serveur
    const app = express();

    // Middlewares
    app.use(bodyParser.urlencoded({ extended: false }));    // Parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                             // Parse application/json

    // Routes
    app.use('/', routesRacine)
    app.use('/api/totalsupplies', routesTotalSupplies)

    // Lancement sur le port "process.env.PORT", en HTTPS
    app.listen(process.env.PORT, () => {
        console.log(`Serveur NodeJS démarré, sur le port ${process.env.PORT}.`)
    })
    
}

module.exports = { start }