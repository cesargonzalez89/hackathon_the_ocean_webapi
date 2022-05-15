class Conn{

    static getConnection(){
        process.env['DATABASE_URL'] = process.env.POSTGRESQLCONNSTR_DATABASE_URL;
        return process.env['DATABASE_URL'];
    }
}

module.exports = Conn;