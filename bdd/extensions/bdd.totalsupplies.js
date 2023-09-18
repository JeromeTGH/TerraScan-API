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
        return await myquery(rqt);
    },

    async cleanTable() {
        const rqt = `DELETE FROM tblTotalSupplies;`
        return await myquery(rqt);
    },

    async testInsertInTable() {
        const maintenant = new Date();

        const code = 'AAAAMMDDHHMM';
        const datetimeUTC = maintenant.toISOString().slice(0, 19).replace('T', ' ');
        const bH1 = true;
        const bH4 = false;
        const bD1 = false;
        const bW1 = false;
        const bM1 = false;
        const bY1 = false;
        const ulunaAmount = 1000222333444;
        const uusdAmount = 2000111222333;
        
        const rqt = `INSERT INTO tblTotalSupplies VALUES (
            null,
            '${code}',
            '${datetimeUTC}',
            ${bH1},
            ${bH4},
            ${bD1},
            ${bW1},
            ${bM1},
            ${bY1},
            ${ulunaAmount},
            ${uusdAmount}
        );`

        return await myquery(rqt);
    }
    

}