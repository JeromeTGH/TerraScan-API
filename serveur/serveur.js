import bodyParser from 'body-parser';
import express from 'express';
import { routesRacine } from './routes/routes.racine.js';

export const serveur = () => {

    // Création du serveur
    const app = express();

    // Middlewares
    app.use(bodyParser.json());

    // Routes
    app.use('/', routesRacine)
    // app.use('/api/utilisateurs', routesUtilisateur)
    // app.use('/api/listes', routesListes)

    // Lancement sur le port "process.env.PORT"
    app.listen(process.env.PORT, () => {
        console.log(`Serveur NodeJS démarré (port ${process.env.PORT})`)
    })
}
