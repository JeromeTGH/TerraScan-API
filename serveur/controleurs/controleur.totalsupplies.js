import { bdd } from "../../bdd/bdd.js";
import { getTotalSupplies } from "../../lcd/getTotalSupplies.js";
import { getslog } from "../../logs/logs.js";
import { mylog } from "../../utils/mylog.js";
import { pause } from "../../utils/pause.js";
import { sendmail } from "../../utils/sendmail.js";


// Retourne les "total supplies" précédemment stockées en BDD
export const getPastValues = async (req, res) => {

    // Récupération des query params
    const limit = req.query.limit ? req.query.limit.toString() : -1;
    const timeunit = req.query.timeunit ? req.query.timeunit.toUpperCase() : '';

    // Analyse / ajustement
    const setLimit = ['20', '30', '50', '100', '200'].includes(limit) ? parseInt(limit) : 50;           // 50 lignes retournées, par défaut
    const setTimeunit = ['H1', 'H4', 'D1', 'W1', 'M1', 'Y1'].includes(timeunit) ? timeunit : 'H1';      // Unité de temps 'H1' par défaut

    // Récupération des données
    getslog("GET '/api/totalsupplies/getPastValues' - Limit=" + setLimit + ' - TimeUnit="' + setTimeunit + '"');
    const rawPastValues = await bdd.totalsupplies.getPastValues(setLimit, setTimeunit);
    if(rawPastValues.erreur) {
        getslog("ERROR (bdd) = " + rawPastValues.erreur);
        res.status(500).json(rawPastValues.erreur);
    }
    else
        res.status(200).json(rawPastValues);

}


// Lance l'enregistrement en BDD des total supplies actuelles (via lecture LCD)
export const saveDataFromLCD = async (req, res) => {

    const nbTentativesMaxPourLectureLCD = 5;            // 5 tentatives max, par défaut
    const tempsEnMsEntreChaqueTentative = 60000;        // 60000ms soit 1 seconde, par défaut
    
    // Boucle de lecture LCD
    getslog("GET '/api/totalsupplies/saveDataFromLCD'");
    for(const idxTentativeLectureLCD = 1 ; idxTentativeLectureLCD <= nbTentativesMaxPourLectureLCD ; idxTentativeLectureLCD++) {
        // Lecture LCD
        const rawTotalSupplies = await getTotalSupplies();
        if(rawTotalSupplies.erreur) {
            mylog("[ERROR]", rawTotalSupplies.erreur, " tentative" + idxTentativeLectureLCD + "/" + nbTentativesMaxPourLectureLCD);
            if(idxTentativeLectureLCD === nbTentativesMaxPourLectureLCD) {
                getslog("ERROR (lcd) = " + rawTotalSupplies.erreur);
                await sendmail('Lecture LCD (total supplies)', 'Impossible de télécharger les total supplies, malgré ' + idxTentativeLectureLCD + ' tentatives.<br><br>Erreur = ' + rawTotalSupplies.erreur);
                res.status(500).json(rawTotalSupplies.erreur);
                break;
            } else {
                getslog("ERROR (lcd) = " + rawTotalSupplies.erreur);
                await pause(tempsEnMsEntreChaqueTentative);
            }
        } else {
            const retourEnregistrementDonnees = await bdd.totalsupplies.enregistreTotalSuppliesDansTable(rawTotalSupplies.uluna, rawTotalSupplies.uusd);
            if(retourEnregistrementDonnees.erreur) {
                getslog("ERROR (bdd) = " + retourEnregistrementDonnees.erreur);
                mylog("[ERROR]", retourEnregistrementDonnees.erreur);
                await sendmail('Enregistrement des total supplies', 'Impossible d\'enregistrer les total supplies en BDD.<br><br>Erreur = ' + retourEnregistrementDonnees.erreur);
                res.status(500).json(retourEnregistrementDonnees.erreur);
            } else {
                mylog("Data saved !");
                res.status(200).json({ result : "Data saved !" });
            }
            break;
        }
    }


}