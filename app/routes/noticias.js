//var dbConnection = require('../../config/dbConnection');

var mssql = require('mssql');
var connString = "Server=localhost; Database=Noticias; user id=usr_node;password=usr_node";

module.exports = function(app) {
    app.get('/noticias', function(req, res) {

        // var resultado = dbConnection.runQuery('select * from tblNoticia')
        // console.log(resultado);

        // dbConnection.conectaBanco();
        // var result = dbConnection.execSQLQuery('select * from tblNoticia');
        // console.log(result);

        var conn = mssql.connect(connString);
        



    })
}