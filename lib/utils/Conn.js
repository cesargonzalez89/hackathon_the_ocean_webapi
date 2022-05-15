class Conn{

    static getConnection(){
        process.env['DATABASE_URL'] = process.env.POSTGRESQLCONNSTR_DATABASE_URL;
        return 0;
    }
}

module.exports = Conn;