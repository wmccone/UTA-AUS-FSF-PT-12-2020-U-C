const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '',
  database: 'playlistDB',
});

const afterConnection = () => {
  connection.query('SELECT * FROM songs', (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};

const searchGenre = () => {
  connection.query('SELECT * FROM songs WHERE genre=?', ['Rock'], (err, res) => {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};
  
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  afterConnection();
  searchGenre();
});
