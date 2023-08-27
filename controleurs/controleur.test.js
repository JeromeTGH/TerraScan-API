const db = require('../utils/bdd');


// Retourne un test racine
module.exports.getRoot = async (req, res) => {
    
    
    try {
        const [result, fields] = await db.query('SELECT * FROM `tblValues`');
        console.log("result", result);
        res.status(200).json(JSON.parse(`{"result": ${result[0].nbUniqueDelegators}}`))
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

}