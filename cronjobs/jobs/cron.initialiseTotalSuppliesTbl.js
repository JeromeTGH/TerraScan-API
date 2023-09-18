
import { bdd } from '../../bdd/bdd.js';
import { mylog } from '../../utils/mylog.js';



export const initialiseTotalSuppliesTbl = async () => {

    const ret1 = await bdd.totalsupplies.dropTable();
    if(ret1.erreur)
        return ret1;
    else
        mylog("Drop table 'tblTotalSupplies' effectué.");


    const ret2 = await bdd.totalsupplies.createTable();
    if(ret2.erreur)
        return ret2;
    else
        mylog("Create table 'tblTotalSupplies' effectué.");


    // const ret3 = await bdd.totalsupplies.cleanTable();
    // if(ret3.erreur)
    //     return ret3;
    // else
    //     mylog("Vidage table 'tblTotalSupplies' effectué.");


    // const ret4 = await bdd.totalsupplies.testInsertInTable();
    // if(ret4.erreur)
    //     return ret4;
    // else
    //     mylog("Test insert into table 'tblTotalSupplies' effectué.");


    // const ret5 = await bdd.totalsupplies.selectLastH1();
    // if(ret5.erreur)
    //     return ret5;
    // else
    //     mylog("Last H1 =", ret5[0]['MAX(enregNumber)']);


    // const ret6 = await bdd.totalsupplies.enregistreTotalSuppliesDansTable(1111,2222);
    // if(ret6.erreur)
    //     return ret6;
    // else
    //     mylog("Insert into table 'tblTotalSupplies' réussi.");
    
    return {}
}
