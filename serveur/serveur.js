import bodyParser from 'body-parser';
import express from 'express';
import { routesRacine } from './routes/routes.racine.js';
import { routesTotalSupplies } from './routes/routes.totalsupplies.js';

export const serveur = () => {

    // Création du serveur
    const app = express();

    // Middlewares
    app.use(bodyParser.json());

    // Routes
    app.use('/', routesRacine)
    app.use('/api/totalsupplies', routesTotalSupplies)

    // Lancement sur le port "process.env.PORT"
    app.listen(process.env.PORT, () => {
        console.log(`Serveur NodeJS démarré (port ${process.env.PORT})`)
    })
    
}
