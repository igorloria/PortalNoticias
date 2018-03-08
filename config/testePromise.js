var mssql = require('mssql');
var connString = "Server=localhost; Database=Noticias; user id=usr_node;password=usr_node";

module.exports.conectaBanco = function() {
    mssql.connect(connString)
        .then(conn => global.conn = conn)
        .catch(err => console.log("erro: " + err));
}

module.exports.execSQLQuery = function(sqlQry, res) {
    console.log(sqlQry);
    var request = new global.conn.Request();
    request
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}

