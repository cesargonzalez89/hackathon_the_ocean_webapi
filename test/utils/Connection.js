class Connection{

    static getConnection(){
        process.env['DATABASE_URL'] = process.env.POSTGRESQLCONNSTR_DATABASE_URL;
    }
}

module.exports = Connection;