import mysqlPromise from "mysql2/promise.js";


export const myquery = async (sql) => {

    const config = {
        host: process.env.DB_HOSTNAME,
        database: process.env.DB_BDDNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    };

    try {
        const connection = await mysqlPromise.createConnection(config);
        const [result, fields] = await connection.query(sql);
        return result;
    }
    catch (err) {
        if(err.message) {
            console.log('[BDD ERROR]', err.message);
            return { erreur : err.message};
        } else {
            console.log('[BDD ERROR]', err)
            return { erreur : err};
        }
    }
};
