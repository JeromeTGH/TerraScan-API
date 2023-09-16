
const { query } = require('./bdd');
const { log } = require('./log');

module.exports.createTable = async () => {

//datetimeUTC DATETIME,

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

    try {
        const result = await query(rqt);
        log("Create table 'tblTotalSupplies' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to create table ..." }
    }

}

module.exports.dropTable = async () => {
    
    const rqt = `DROP TABLE IF EXISTS tblTotalSupplies;`

    try {
        const result = await query(rqt);
        log("Drop table 'tblTotalSupplies' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to drop table ..." }
    }
    
}

module.exports.videTable = async () => {
        
    const rqt = `DELETE FROM tblTotalSupplies;`

    try {
        const result = await query(rqt);
        log("Vidage table 'tblTotalSupplies' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to empty table ..." }
    }

}

module.exports.testInsertInTable = async () => {

    const code = 'AAAAMMDDHHMM';
    const datetimeUTC = 'AAAA-MM-DDTHH:MM:SSZ';
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

    try {
        const result = await query(rqt);
        log("Test insert into table 'tblTotalSupplies' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to test insertion into table ..." }
    }

}


module.exports.selectLastH1 = async () => {
        
    const rqt = `SELECT MAX(enregNumber) FROM tblTotalSupplies WHERE bH1=TRUE;`

    try {
        const [result, fields] = await query(rqt);
        // console.log(result[0]['MAX(enregNumber)'])
        return result[0]['MAX(enregNumber)'];       // = null si aucun champ trouvé
    }
    catch (err) {
        return { "erreur": "Failed to empty table ..." }
    }

}


module.exports.enregistreTotalSuppliesDansTable = async (uluna, uusd) => {

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
    const bH4 = (nHeure === 0 || nHeure === 4 || nHeure === 8 || nHeure === 12 || nHeure === 16 || nHeure === 20);
    const bD1 = nHeure === 0;
    const bW1 = (dayOfTheWeek === 1 && nHeure === 0);       // Lundi à Oh...
    const bM1 = (nJour === 1 && nHeure === 0);
    const bY1 = (nMois === 1 && nJour === 1 && nHeure === 0);
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
    );`

    try {
        const result = await query(rqt);
        log("Insert into table 'tblTotalSupplies' réussi.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to test insertion into table ..." }
    }

}