
import { bdd } from '../../bdd/bdd.js';
import { mylog } from '../../utils/mylog.js';



export const initialiseTotalSuppliesTbl = async () => {

    // const ret1 = await bdd.totalsupplies.dropTable();
    // if(ret1.erreur)
    //     return ret1;
    // else
    //     mylog("Drop table 'tblTotalSupplies' effectué.");


    // const ret2 = await bdd.totalsupplies.createTable();
    // if(ret2.erreur)
    //     return ret2;
    // else
    //     mylog("Create table 'tblTotalSupplies' effectué.");


    const ret3 = await bdd.totalsupplies.cleanTable();
    if(ret3.erreur)
        return ret3;
    else
        mylog("Vidage table 'tblTotalSupplies' effectué.")


    const ret4 = await bdd.totalsupplies.testInsertInTable();
    if(ret4.erreur)
        return ret4;
    else
        mylog("Test insert into table 'tblTotalSupplies' effectué.")


    // const ret5 = await selectLastH1();
    // if(ret5.erreur) {
    //     return ret5;
    // }
    
    return {}
}
