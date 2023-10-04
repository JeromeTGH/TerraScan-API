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


// Externe : permet de récupérer des X dernières valeurs, avec la plus récente en premier, triée par unité de temps souhaité (H1, H4, D1, ...)
const getPastValues = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblTotalSupplies WHERE b${timeunit}=TRUE ORDER BY enregNumber DESC LIMIT ${limit}`;
    return await myquery(rqt);
}

// Externe : permet de récupérer des X dernières valeurs, avec la plus récente en premier, triée par unité de temps souhaité (H1, H4, D1, ...)
const getPastValues2 = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblTotalSupplies2 WHERE b${timeunit}=TRUE ORDER BY enregNumber DESC LIMIT ${limit}`;
    return await myquery(rqt);
}

module.exports = { getPastValues, getPastValues2 }