const { getTotalSupplies } = require("./getTotalSupplies");
const { log } = require("./log");
const { dropTable, createTable, videTable, testInsertInTable, selectLastH1, enregistreNouvelleBougieDansTable } = require("./operations_sur_table");


module.exports.initialise = async () => {

    // return {};

    const ret1 = await dropTable();
    if(ret1['erreur']) {
        // log("ERROR", ret1['erreur'])
        return ret1['erreur'];
    }

    const ret2 = await createTable();
    if(ret2['erreur']) {
        // log("ERROR", ret2['erreur'])
        return ret2['erreur'];
    }    

    // const ret3 = await videTable();
    // if(ret3['erreur']) {
    //     log("ERROR", ret3['erreur'])
    //     return
    // }

    // const ret4 = await testInsertInTable();
    // if(ret4['erreur']) {
    //     log("ERROR", ret4['erreur'])
    //     return
    // }
    
    return {}
}

module.exports.taches = async () => {

    log("Cron call")

    const lastH1 = await selectLastH1();

    if(lastH1 === null) {
        const rawTotalSupplies = await getTotalSupplies();
        if(rawTotalSupplies['erreur']) {
            log("ERROR", rawTotalSupplies['erreur'])
        } else {
            const retourEnregNouvelleBougie = enregistreNouvelleBougieDansTable(rawTotalSupplies.uluna, rawTotalSupplies.uusd);
            if(retourEnregNouvelleBougie['erreur']) {
                log("ERROR", retourEnregNouvelleBougie['erreur'])
            }
        }
    } else {
        log("lastH1 =", lastH1)
    }




    // const rawTotalSupplies = await getTotalSupplies();
    
    // if(rawTotalSupplies['erreur']) {
    //     log("ERROR", rawTotalSupplies['erreur'])
    //     //     // Exemple de ré-essai en cas d'échec
    //     //         // if(retour['erreur']) {
    //     //         //     setTimeout(() => {
    //     //         //         getTotalSupplies();
    //     //         //     }, 1000)
    //     //         // }
    //     return;
    // }

    // log("LUNC =", rawTotalSupplies.uluna, " - USTC =", rawTotalSupplies.uusd)





}