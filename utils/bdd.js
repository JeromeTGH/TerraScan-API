const mysqlPromise = require('mysql2/promise.js');

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

const getPastValues = async(limit, timeunit) => {
    const rqt = `SELECT * FROM tblTotalSupplies2 WHERE b${timeunit}=TRUE ORDER BY enregNumber DESC LIMIT ${limit}`;
    return await myquery(rqt);
}


module.exports = { getPastValues }