const db = require('../database/db')

class UsuarioRepository{
    
    adicionar(registro,callback){
        const sql = "INSERT INTO usuario (login,senha) VALUES (?,?)";
        const values = [registro.login , registro.senhaHash];

        db.query(sql,values, callback);
    }
}

module.exports = new UsuarioRepository();