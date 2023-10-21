const bdd = require('../../bdd/bdd.js');


// Retourne l'historique du staking lunc, comme stocké en BDD
const getPastValues = async (req, res) => {

    // Récupération des query params
    const limit = req.query.limit ? req.query.limit.toString() : -1;
    const timeunit = req.query.timeunit ? req.query.timeunit.toUpperCase() : '';

    // Analyse / ajustement
    const setLimit = ['20', '30', '50', '100', '200'].includes(limit) ? parseInt(limit) : 50;           // 50 lignes retournées, par défaut
    const setTimeunit = ['H1', 'H4', 'D1', 'W1', 'M1', 'Y1'].includes(timeunit) ? timeunit : 'H1';      // Unité de temps 'H1' par défaut

    // Récupération des données
    const rawPastValues = await bdd.getLuncStaking(setLimit, setTimeunit);
    if(rawPastValues.erreur) {
        res.status(500).json(rawPastValues.erreur);
    }
    else
        res.status(200).json(rawPastValues);

}


module.exports = { getPastValues }