const mysqlPromise = require('mysql2/promise.js');


// Interne : permet de faire des requêtes SQL
const myquery = async (sql) => {

    const config = {
        host: process.env.DB_HOSTNAME,
        database: process.env.DB_BDDNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        timezone: 'Z'
    };

    try {
        const connection = await mysqlPromise.createConnection(config);
        const [result, fields] = await connection.query(sql);
        return result;
    }
    catch (err) {
        if(err.message) {
            return { erreur : err.message };
        } else {
            return { erreur : err };
        }
    }
};


// Externe : permet de récupérer des X dernières valeurs de TotalSupplies ; avec la plus récente en premier, et trié par unité de temps souhaité (H1, H4, D1, ...)
const getTotalSupplies = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblTotalSupplies WHERE b${timeunit}=TRUE ORDER BY enregNumber ASC LIMIT ${limit}`;
    return await myquery(rqt);
}

// Externe : permet de récupérer des X dernières valeurs de TotalSupplies ; avec la plus récente en premier, et trié par unité de temps souhaité (H1, H4, D1, ...)
const getTotalSupplies2 = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblTotalSupplies2 WHERE b${timeunit}=TRUE ORDER BY enregNumber ASC LIMIT ${limit}`;
    return await myquery(rqt);
}

// Externe : permet de récupérer des X dernières valeurs de LuncStaking ; avec la plus récente en premier, et trié par unité de temps souhaité (H1, H4, D1, ...)
const getLuncStaking = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblLuncStaking WHERE b${timeunit}=TRUE ORDER BY enregNumber ASC LIMIT ${limit}`;
    return await myquery(rqt);
}

// Externe : permet de récupérer des X dernières valeurs de CommunityPoolContent ; avec la plus récente en premier, et trié par unité de temps souhaité (H1, H4, D1, ...)
const getCommunityPoolContent = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblCommunityPoolContent WHERE b${timeunit}=TRUE ORDER BY enregNumber ASC LIMIT ${limit}`;
    return await myquery(rqt);
}

// Externe : permet de récupérer des X dernières valeurs de OraclePoolContent ; avec la plus récente en premier, et trié par unité de temps souhaité (H1, H4, D1, ...)
const getOraclePoolContent = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblOraclePoolContent WHERE b${timeunit}=TRUE ORDER BY enregNumber ASC LIMIT ${limit}`;
    return await myquery(rqt);
}

module.exports = { getTotalSupplies, getTotalSupplies2, getLuncStaking, getCommunityPoolContent, getOraclePoolContent }