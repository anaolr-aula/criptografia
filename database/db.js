const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alunolab',
    database: 'sistema_login',
    port: 3303
});

conexao.connect((error)=>{
    if(error){
        console.log("Erro de conexão -",error)
    }else{
        console.log("Conectado ao mysql")
    }
})

module.exports = conexao;