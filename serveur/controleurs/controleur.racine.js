
// Retourne un test racine
export const getRoot = async (req, res) => {
    
    getslog("GET '/'");
    res.status(200).send('App running !');

}