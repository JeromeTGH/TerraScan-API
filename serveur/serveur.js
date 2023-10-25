const express = require('express');
const routesRacine = require('./routes/routes.racine.js');
const routesTotalSupplies = require('./routes/routes.totalsupplies.js');
const routesLuncStaking = require('./routes/routes.luncstaking.js');
const routesCommunityPool = require('./routes/routes.communitypool.js');
const routesOraclePool = require('./routes/routes.oraclepool.js');
const logger = require('../utils/logger.js');


const start = () => {

    // Création du serveur
    const app = express();

    // Cors
    app.use((req,res,next)=>{
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        next(); 
    })

    // Middlewares
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