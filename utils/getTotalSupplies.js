
const Axios = require('axios');
const endpoint = 'https://terra-classic-lcd.publicnode.com';

module.exports.getTotalSupplies = async () => {

    const path = '/cosmos/bank/v1beta1/supply';

    const axios = Axios.create({
        baseURL: endpoint,
        headers: {'Accept': 'application/json'},
        timeout: 90000      // valeur en ms (soit 90 secondes de timeout, ici)
    })

    // Montage des paramètres nécessaires ici
    const params = new URLSearchParams();
    params.append("pagination.limit", 9999);

    // Structure de retour
    const tblRetour = {
        uluna: null,
        uusd: null
    }

    // Requétage
    const rawTotalSupplies = await axios.get(path, {params});
    if(rawTotalSupplies.data?.supply) {

        const idxLunc = rawTotalSupplies.data.supply.findIndex(element => element.denom === 'uluna');
        if(idxLunc === -1)
            return { "erreur": "Failed to find LUNC supply ..." }
        else
            tblRetour.uluna = parseInt(rawTotalSupplies.data.supply[idxLunc].amount / 1000000)

        const idxUstc = rawTotalSupplies.data.supply.findIndex(element => element.denom === 'uusd');
        if(idxUstc === -1)
            return { "erreur": "Failed to find USTC supply ..." }
        else
            tblRetour.uusd = parseInt(rawTotalSupplies.data.supply[idxUstc].amount / 1000000)

    } else
        return { "erreur": "Failed to fetch [total supply] ..." }
};
