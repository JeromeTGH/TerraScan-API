
import cron from 'node-cron';
import { bdd } from '../../bdd/bdd.js';
import { getTotalSupplies } from '../../lcd/getTotalSupplies.js';
import { mylog } from '../../utils/mylog.js';


export const writeActualSuppliesInTbl = async () => {

    cron.schedule('*/10 * * * * *', async () => {

        mylog("Cron call")
    
        const rawTotalSupplies = await getTotalSupplies();
        if(rawTotalSupplies.erreur) {
            mylog("ERROR", rawTotalSupplies.erreur)
        } else {
            const retourEnregNouvelleBougie = await bdd.totalsupplies.enregistreTotalSuppliesDansTable(rawTotalSupplies.uluna, rawTotalSupplies.uusd);
            if(retourEnregNouvelleBougie.erreur) {
                mylog("ERROR", retourEnregNouvelleBougie.erreur)
            }
        }



    })




    // const rawTotalSupplies = await getTotalSupplies();
    
    // if(rawTotalSupplies['erreur']) {
    //     mylog("ERROR", rawTotalSupplies['erreur'])
    //     //     // Exemple de ré-essai en cas d'échec
    //     //         // if(retour['erreur']) {
    //     //         //     setTimeout(() => {
    //     //         //         getTotalSupplies();
    //     //         //     }, 1000)
    //     //         // }
    //     return;
    // }

    // mylog("LUNC =", rawTotalSupplies.uluna, " - USTC =", rawTotalSupplies.uusd)


}