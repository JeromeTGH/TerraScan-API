
const { query } = require('./bdd');
const { log } = require('./log');

module.exports.createTable = async () => {

//datetimeUTC DATETIME,

    const rqt = `CREATE TABLE IF NOT EXISTS tblBurns (
                    enregNumber INT AUTO_INCREMENT PRIMARY KEY,
                    code VARCHAR(12),
                    datetimeUTC DATETIME,
                    bH1 BOOLEAN NOT NULL DEFAULT TRUE,
                    bH4 BOOLEAN NOT NULL DEFAULT FALSE,
                    bD1 BOOLEAN NOT NULL DEFAULT FALSE,
                    bW1 BOOLEAN NOT NULL DEFAULT FALSE,
                    bM1 BOOLEAN NOT NULL DEFAULT FALSE,
                    bY1 BOOLEAN NOT NULL DEFAULT FALSE,
                    debutUlunaAmount BIGINT,
                    debutUusdAmount BIGINT,
                    finUlunaAmount BIGINT,
                    finUusdAmount BIGINT
                );`
    // code example : 202309161702 (en fait : YYYYMMDDHHMM)
    // datetimeUTC example : 2023-09-16T17:02:33.169Z

    try {
        const result = await query(rqt);
        log("Create table 'tblBurns' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to create table ..." }
    }

}

module.exports.dropTable = async () => {
    
    const rqt = `DROP TABLE IF EXISTS tblBurns;`

    try {
        const result = await query(rqt);
        log("Drop table 'tblBurns' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to drop table ..." }
    }
    
}

module.exports.videTable = async () => {
        
    const rqt = `DELETE FROM tblBurns;`

    try {
        const result = await query(rqt);
        log("Vidage table 'tblBurns' effectué.")
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
    const debutUlunaAmount = 1000222333444;
    const debutUusdAmount = 2000111222333;
    const finUlunaAmount = 1000222333444;
    const finUusdAmount = 2000111222333;

    
    const rqt = `INSERT INTO tblBurns VALUES (
        null,
        '${code}',
        '${datetimeUTC}',
        ${bH1},
        ${bH4},
        ${bD1},
        ${bW1},
        ${bM1},
        ${bY1},
        ${debutUlunaAmount},
        ${debutUusdAmount},
        ${finUlunaAmount},
        ${finUusdAmount}
    );`

    try {
        const result = await query(rqt);
        log("Test insert into table 'tblBurns' effectué.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to test insertion into table ..." }
    }

}


module.exports.selectLastH1 = async () => {
        
    const rqt = `SELECT MAX(enregNumber) FROM tblBurns WHERE bH1=TRUE;`

    try {
        const [result, fields] = await query(rqt);
        // console.log(result[0]['MAX(enregNumber)'])
        return result[0]['MAX(enregNumber)'];       // = null si aucun champ trouvé
    }
    catch (err) {
        return { "erreur": "Failed to empty table ..." }
    }

}


module.exports.enregistreNouvelleBougieDansTable = async (uluna, uusd) => {

    const maintenant = new Date();

    const code = maintenant.toISOString().replace(' ', '').replaceAll('-', '').replaceAll(':', '').replace('T', '').slice(0,12);
    const datetimeUTC = maintenant.toISOString().slice(0, 19).replace('T', ' ');
    const bH1 = true;
    const bH4 = false;
    const bD1 = false;
    const bW1 = false;
    const bM1 = false;
    const bY1 = false;
    const debutUlunaAmount = uluna;
    const debutUusdAmount = uusd;
    const finUlunaAmount = 0;
    const finUusdAmount = 0;

    
    const rqt = `INSERT INTO tblBurns VALUES (
        null,
        '${code}',
        '${datetimeUTC}',
        ${bH1},
        ${bH4},
        ${bD1},
        ${bW1},
        ${bM1},
        ${bY1},
        ${debutUlunaAmount},
        ${debutUusdAmount},
        ${finUlunaAmount},
        ${finUusdAmount}
    );`

    try {
        const result = await query(rqt);
        log("Insert into table 'tblBurns' réussi.")
        return true;
    }
    catch (err) {
        return { "erreur": "Failed to test insertion into table ..." }
    }

}