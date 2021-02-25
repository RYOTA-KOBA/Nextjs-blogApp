const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  database: 'db_name',
});

connection.connect();
connection.query('SELECT name, email from person;', function (err, rows, fields) {
  if (err) {
    console.log('err: ' + err);
  }
  console.log('name: ' + rows[0].name);
  console.log('email: ' + rows[0].email);
});
connection.end();
