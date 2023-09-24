import { myquery } from "../bdd.js";

export const totalsupplies = {

    async getPastValues(limit, timeunit) {
        const rqt = `SELECT * FROM tblTotalSupplies WHERE b${timeunit}=TRUE ORDER BY enregNumber DESC LIMIT ${limit}`;
        return await myquery(rqt);
    },

    async dropTable() {
        const rqt = `DROP TABLE IF EXISTS tblTotalSupplies`;
        return await myquery(rqt);
    },

    async createTable() {    
        const rqt = `CREATE TABLE IF NOT EXISTS tblTotalSupplies (
                        enregNumber INT AUTO_INCREMENT PRIMARY KEY,
                        code VARCHAR(12) UNIQUE,
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
        const rqt = `DELETE FROM tblTotalSupplies`;
        return await myquery(rqt);
    },

    async enregistreTotalSuppliesDansTable(uluna, uusd) {

        const maintenant = new Date();
        const date_formatee = maintenant.toISOString().slice(0, 19).replace('T', ' ');
    
        const nAnnee = date_formatee.slice(0, 4);
        const nMois = date_formatee.slice(5, 7);
        const nJour = date_formatee.slice(8, 10);
        const nHeure = date_formatee.slice(11, 13);
        const nMinute = date_formatee.slice(14, 16);
    
        const dayOfTheWeek = maintenant.getUTCDay();        // 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on
        const code = nAnnee + nMois + nJour + nHeure + nMinute;
        const datetimeUTC = date_formatee;
        const bH1 = true;
        const bH4 = (nHeure === "00" || nHeure === "04" || nHeure === "08" || nHeure === "12" || nHeure === "16" || nHeure === "20");
        const bD1 = nHeure === "00";
        const bW1 = (dayOfTheWeek === 1 && nHeure === "00");       // Lundi à Oh...
        const bM1 = (nJour === "01" && nHeure === "00");
        const bY1 = (nMois === "01" && nJour === "01" && nHeure === "00");
        const ulunaAmount = uluna;
        const uusdAmount = uusd;
    
        
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
        )`;

        return await myquery(rqt);
    }
    

}