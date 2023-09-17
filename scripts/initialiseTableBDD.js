
import { mylog } from '../utils/mylog.js';
import { dropTable, createTable, videTable, testInsertInTable } from '../utils/operations_sur_table.js';


export const initialiseTableBDD = async () => {

    const ret1 = await dropTable();
    if(ret1.erreur) {
        return ret1;
    }

    const ret2 = await createTable();
    if(ret2.erreur) {
        return ret2;
    }    


    // const ret3 = await videTable();
    // if(ret3.erreur) {
    //     return ret3;
    // }

    // const ret4 = await testInsertInTable();
    // if(ret4.erreur) {
    //     return ret4;
    // }
    
    return {}
}
