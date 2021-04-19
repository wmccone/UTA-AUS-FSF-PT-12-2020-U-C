const mysql = require('mysql');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '',
    database: 'great_bayDB',
  });

 const productQuestions = () => {
     inquirer.prompt([
        {
            type: 'input',
            message: '?',
            name: 'item',
          },

          {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
          },
     ])
 }


  const createProduct = () => {
    console.log('Inserting a new product...\n');
    const query = connection.query(
      'INSERT INTO products SET ?',
      {
        flavor: 'Rocky Road',
        price: 3.0,
        quantity: 50,
      },
      (err, res) => {
        if (err) throw err;
        console.log(`${res.affectedRows} product inserted!\n`);
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );