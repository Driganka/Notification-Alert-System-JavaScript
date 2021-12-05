const mysql = require('mysql');

const dbc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aknagird10',
    database: 'companydatabase'
}); 

dbc.connect(function(err){
    if(err) throw err ; 
    console.log('Database Successfully Connected ~~!!~~') ;
});

module.exports = dbc ; 