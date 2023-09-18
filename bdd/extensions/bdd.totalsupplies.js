import { myquery } from "../bdd.js";

export const totalsupplies = {

    async getPastValues() {
        const rqt = `SELECT * FROM tblTotalSupplies`
        return await myquery(rqt);
    },

    async dropTable() {
        const rqt = `DROP TABLE IF EXISTS tblTotalSupplies;`
        return await myquery(rqt);
    },

    async createTable() {    
        const rqt = `CREATE TABLE IF NOT EXISTS tblTotalSupplies (
                        enregNumber INT AUTO_INCREMENT PRIMARY KEY,
                        code VARCHAR(12),
                        datetimeUTC DATETIME,
                        bH1 BOOLEAN NOT NULL DEFAULT TRUE,
                        bH4 BOOLEAN NOT NULL DEFAULT FALSE,
                        bD1 BOOLEAN NOT NULL DEFAULT FALSE,
                        bW1 BOOLEAN NOT NULL DEFAULT FALSE,
                        bM1 BOOLEAN NOT NULL DEFAULT FALSE,
                        bY1 BOOLEAN NOT NULL DEFAULT FALSE,
                        ulunaAmount BIGINT,
                        uusdAmount BIGINT
                    );`
        // code example : 202309161702 (en fait : YYYYMMDDHHMM)
        // datetimeUTC example : 2023-09-16T17:02:33.169Z
        return await myquery(rqt);
    }

}