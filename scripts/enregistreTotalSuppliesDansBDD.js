import { getTotalSupplies } from '../utils/getTotalSupplies.js';
import { mylog } from '../utils/mylog.js';
import { enregistreTotalSuppliesDansTable } from '../utils/operations_sur_table.js';


export const enregistreTotalSuppliesDansBDD = async () => {

    mylog("Cron call")

    const rawTotalSupplies = await getTotalSupplies();
    if(rawTotalSupplies['erreur']) {
        mylog("ERROR", rawTotalSupplies['erreur'])
    } else {
        const retourEnregNouvelleBougie = enregistreTotalSuppliesDansTable(rawTotalSupplies.uluna, rawTotalSupplies.uusd);
        if(retourEnregNouvelleBougie['erreur']) {
            mylog("ERROR", retourEnregNouvelleBougie['erreur'])
        }
    }




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