import { bdd } from "../../bdd/bdd.js";
import { getTotalSupplies } from "../../lcd/getTotalSupplies.js";
import { mylog } from "../../utils/mylog.js";


// Retourne les "total supplies" précédemment stockées en BDD
export const getPastValues = async (req, res) => {

    const rawPastValues = await bdd.totalsupplies.getPastValues();
    if(rawPastValues.erreur)
        res.status(500).json(rawPastValues.erreur)
    else
        res.status(200).json(JSON.stringify(rawPastValues))

}


// Lance l'enregistrement en BDD des total supplies actuelles (via lecture LCD)
export const saveDataFromLCD = async (req, res) => {

    const rawTotalSupplies = await getTotalSupplies();
    if(rawTotalSupplies.erreur) {
        mylog("ERROR", rawTotalSupplies.erreur)
        res.status(500).json(rawTotalSupplies.erreur)
    } else {
        const retourEnregistrementDonnees = await bdd.totalsupplies.enregistreTotalSuppliesDansTable(rawTotalSupplies.uluna, rawTotalSupplies.uusd);
        if(retourEnregistrementDonnees.erreur) {
            mylog("ERROR", retourEnregistrementDonnees.erreur)
            res.status(500).json(retourEnregistrementDonnees.erreur)
        } else {
            mylog("Data saved !")
            res.status(200).json("Data saved !")
        }
    }

}