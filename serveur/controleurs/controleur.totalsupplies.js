import { bdd } from "../../bdd/bdd.js";


// Retourne des "total supplies" précédemment enregistrées
export const getPastValues = async (req, res) => {
    
    const rawPastValues = await bdd.totalsupplies.getPastValues();
    if(rawPastValues.erreur)
        res.status(500).json(rawPastValues.erreur)
    else
        res.status(200).json(JSON.stringify(rawPastValues))

}