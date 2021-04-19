const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'H1ghlanndin88',
  database: 'top_songsDB',
});

const searchQuestions = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'How would you like to search?',
      name: 'searchtype',
      choices: ['Artist', 'Song', 'Position',]
    },

  ])
}

const queryQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What would you like to search for?',
      name: 'query',
    },
  ])
}

const songProgram = () => {
  songQuestions()
    .then((data) => {
      if (data.search === 'Artist') {
        readDatabase(data)
      }
      if (data.search === 'Artist') {
        readDatabase(data)
      }
      if (data.search === 'Artist') {
        readDatabase(data)
      }
      if (data.search === 'Artist') {
        readDatabase(data)
      }
      else(){
        connection.end
      }
    })
}

const readDatabase = () => {

  connection.query(`SELECT * FROM topSongs WHERE Artist=? INNER JOIN topSongs ON topSongs.year = topAlbums.year`, [data.query], (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
  });
}

connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  songProgram();
});