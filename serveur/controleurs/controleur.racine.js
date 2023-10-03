
// Retourne un test racine
const getRoot = async (req, res) => {
    
    res.status(200).send('App running !');

}

module.exports = { getRoot }