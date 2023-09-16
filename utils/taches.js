const { log } = require("./log");
const { dropTable, createTable, videTable, testInsertInTable } = require("./operations_sur_table");
const test_nodecron_interne = true;
const cron = require('node-cron');

module.exports.taches = async () => {

    const ret1 = await dropTable();
    if(ret1['erreur']) {
        log("ERROR", ret1['erreur'])
        return
    }

    const ret2 = await createTable();
    if(ret2['erreur']) {
        log("ERROR", ret2['erreur'])
        return
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

    if(test_nodecron_interne) {
        cron.schedule('*/10 * * * * *', () => {
            log("Crontask")
    //         const retour = getTotalSupplies();
    //     // Exemple de ré-essai en cas d'échec
    //         // if(retour['erreur']) {
    //         //     setTimeout(() => {
    //         //         getTotalSupplies();
    //         //     }, 1000)
    //         // }
        })
    }

}