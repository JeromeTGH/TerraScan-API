
import { myquery } from './bdd.js';
import { mylog } from './mylog.js';



export const selectLastH1 = async () => {
        
    const rqt = `SELECT MAX(enregNumber) FROM tblTotalSupplies WHERE bH1=TRUE;`

    const result = await myquery(rqt);
    if(result.erreur) {
        return { "erreur": "Failed to select last H1 in table ..." }
    } else {
        mylog("Last H1 =", result[0]['MAX(enregNumber)'])
        return result[0]['MAX(enregNumber)'];               // = null si aucun champ trouvé
    }

}


export const enregistreTotalSuppliesDansTable = async (uluna, uusd) => {

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


    const result = await myquery(rqt);
    if(result.erreur) {
        return { "erreur": "Failed to test insertion into table ..." }
    } else {
        mylog("Insert into table 'tblTotalSupplies' réussi.")
        return true;
    }


}