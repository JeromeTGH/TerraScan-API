import { myquery } from "../../utils/bdd.js";


// Retourne un test racine
export const getRoot = async (req, res) => {
    
    res.status(200).send('App running !');

}