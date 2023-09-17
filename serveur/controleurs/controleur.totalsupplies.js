import { myquery } from "../../utils/bdd.js";


// Retourne la totalité de la table des "total supplies"
export const getAll = async (req, res) => {
    
    const result = await myquery('SELECT * FROM tblTotalSupplies');

    if(result.erreur)
        res.status(500).json(result.erreur)
    else
        res.status(200).json(JSON.stringify(result))

}