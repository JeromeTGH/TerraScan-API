import { initialiseTotalSuppliesTbl } from './jobs/cron.initialiseTotalSuppliesTbl.js';
import { writeActualSuppliesInTbl } from './jobs/cron.writeActualSuppliesInTbl.js';

export const cronjobs = async () => {

    // Préparation / fonctiosn de test
    const initTblSupplies = await initialiseTotalSuppliesTbl();
    if(initTblSupplies.erreur)
        return;

    // Jobs
    writeActualSuppliesInTbl();

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