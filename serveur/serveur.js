import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import https from 'https';
import { routesRacine } from './routes/routes.racine.js';
import { routesTotalSupplies } from './routes/routes.totalsupplies.js';
import { mylog } from '../utils/mylog.js';


export const serveur = () => {

    // Création du serveur
    const app = express();

    // Middlewares
    app.use(bodyParser.urlencoded({ extended: false }));    // Parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                             // Parse application/json

    // Routes
    app.use('/', routesRacine)
    app.use('/api/totalsupplies', routesTotalSupplies)

    // // Lancement sur le port "process.env.PORT"
    // app.listen(process.env.PORT, () => {
    //     mylog(`Serveur NodeJS démarré, sur le port ${process.env.PORT}.`)
    // })

    https
        .createServer(
            {
                key: fs.readFileSync("./config/key.pem"),
                cert: fs.readFileSync("./config/cert.pem"),
            },
            app
        )
        .listen(process.env.PORT, () => {
            mylog(`Serveur NodeJS démarré, sur le port ${process.env.PORT}.`)
        })

    
}
