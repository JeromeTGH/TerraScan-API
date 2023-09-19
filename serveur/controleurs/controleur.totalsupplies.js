import { bdd } from "../../bdd/bdd.js";
import { getTotalSupplies } from "../../lcd/getTotalSupplies.js";
import { getslog } from "../../logs/logs.js";
import { mylog } from "../../utils/mylog.js";
import { pause } from "../../utils/pause.js";
import { sendmail } from "../../utils/sendmail.js";


// Retourne les "total supplies" précédemment stockées en BDD
export const getPastValues = async (req, res) => {

    getslog("GET '/api/totalsupplies/getPastValues'")
    const rawPastValues = await bdd.totalsupplies.getPastValues();
    if(rawPastValues.erreur) {
        getslog("ERROR = " + rawPastValues.erreur);
        res.status(500).json(rawPastValues.erreur);
    }
    else
        res.status(200).json(JSON.stringify(rawPastValues));

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
                getslog("ERROR = " + rawTotalSupplies.erreur);
                await sendmail('Lecture LCD (total supplies)', 'Impossible de télécharger les total supplies, malgré ' + idxTentativeLectureLCD + ' tentatives.<br><br>Erreur = ' + rawTotalSupplies.erreur);
                res.status(500).json(rawTotalSupplies.erreur);
                break;
            } else {
                await pause(tempsEnMsEntreChaqueTentative);
            }
        } else {
            const retourEnregistrementDonnees = await bdd.totalsupplies.enregistreTotalSuppliesDansTable(rawTotalSupplies.uluna, rawTotalSupplies.uusd);
            if(retourEnregistrementDonnees.erreur) {
                getslog("ERROR = " + retourEnregistrementDonnees.erreur);
                mylog("[ERROR]", retourEnregistrementDonnees.erreur);
                await sendmail('Enregistrement des total supplies', 'Impossible d\'enregistrer les total supplies en BDD.<br><br>Erreur = ' + retourEnregistrementDonnees.erreur);
                res.status(500).json(retourEnregistrementDonnees.erreur);
            } else {
                mylog("Data saved !");
                res.status(200).json("Data saved !");
            }
            break;
        }
    }


}