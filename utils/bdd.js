const mysql = require("mysql2/promise");

const config = {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_BDDNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

module.exports.query = async (sql) => {
    const connection = await mysql.createConnection(config);
    const result = await connection.query(sql);
    return result;
};
