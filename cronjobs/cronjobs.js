import cron from 'node-cron';
import { initialiseTableBDD } from '../scripts/initialiseTableBDD.js';
import { enregistreTotalSuppliesDansBDD } from '../scripts/enregistreTotalSuppliesDansBDD.js';
import { mylog } from '../utils/mylog.js';

export const cronjobs = () => {

    initialiseTableBDD().then((res) => {

        if(res.erreur) {
            mylog("[ERREUR]", res.erreur)
            return;
        } else {
            mylog(res);
        }

        // cron.schedule('*/10 * * * * *', () => {
        //     enregistreTotalSuppliesDansBDD();
        // })

    })

}