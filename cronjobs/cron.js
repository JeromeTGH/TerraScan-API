import cron from 'node-cron';
import { mylog } from '../utils/mylog.js';
import { initialiseTotalSuppliesTbl } from './jobs/cron.initialiseTotalSuppliesTbl.js';

export const cronjobs = async () => {

    await initialiseTotalSuppliesTbl();


    // initialiseTableBDD().then((res) => {

    //     if(res.erreur) {
    //         mylog("[ERREUR]", res.erreur)
    //         return;
    //     } else {
    //         cron.schedule('*/10 * * * * *', () => {
    //             enregistreTotalSuppliesDansBDD();
    //         })
    //     }


    // })

}