import { bdd } from "./bdd/bdd.js"
import { mylog } from "./utils/mylog.js";


export const app = async () => {
    
    await bdd.totalsupplies.dropTable();
    await bdd.totalsupplies.createTable();

}