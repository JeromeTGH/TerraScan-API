const express = require('express');
const routesRacine = require('./routes/routes.racine.js');
const routesTotalSupplies = require('./routes/routes.totalsupplies.js');
const routesLuncStaking = require('./routes/routes.luncstaking.js');
const routesCommunityPool = require('./routes/routes.communitypool.js');
const routesOraclePool = require('./routes/routes.oraclepool.js');
const logger = require('../utils/logger.js');
const cors = require('cors');

const start = () => {

    // Création du serveur
    const app = express();

    // Cors
    const tblCorsWhiteList = process.env.CORS_WHITELIST.split(/\s*,\s*/);
    const corsOptionsDelegate = (req, callback) => {
        const corsOptions = {
            methods: ["GET", "PUT", "POST", "DELETE", "HEAD", "PATCH"],
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true
        };

        const myIpAddress = req.connection.remoteAddress;           // Récupération de l'adresse IP du requéteur
        if (tblCorsWhiteList.indexOf(myIpAddress) !== -1) {
            corsOptions.origin = true
        } else {
            corsOptions.origin = false
        }
        callback(null, corsOptions);
    }
    
    // Middlewares
    app.use(cors(corsOptionsDelegate));
    app.use(express.json());                            // Parse application/json
	app.use(express.urlencoded({ extended: true }));	// Parse application/x-www-form-urlencoded	

    // Routes
    app.use('/', routesRacine)
    app.use('/api/totalsupplies', routesTotalSupplies)
    app.use('/api/luncstaking', routesLuncStaking)
    app.use('/api/communitypool', routesCommunityPool)
    app.use('/api/oraclepool', routesOraclePool)

    // Lancement sur le port "process.env.PORT", en HTTPS
    app.listen(process.env.PORT, () => {
        logger.log(`Serveur NodeJS démarré, sur le port ${process.env.PORT}.`)
    })
    
}

module.exports = { start }