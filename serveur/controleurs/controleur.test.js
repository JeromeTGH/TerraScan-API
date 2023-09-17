import { myquery } from "../../utils/bdd.js";


// Retourne un test racine
export const getRoot = async (req, res) => {
    
    const result = await myquery('SELECT * FROM tblTotalSupplies');

    if(!result.erreur)
        res.status(200).json(JSON.stringify(result))
    else
        res.status(500).json(result.erreur)

}