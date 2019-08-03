var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Adriana98!",
  database: "bamazon"
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // displayData();
  printID();
  // printItem();
  // getItemInfo();

});

function printID() {
  connection.query("SELECT id,product,department,stock,price FROM products", function (err, res) {
    if (err) throw err;
    console.log()
    console.table(res);
    console.log()
    getItemInfo();
  });
  
}

function getItemInfo() {
  inquirer
    .prompt([{
        type: "input",
        name: "item",
        message: "Please Enter a Valid item ID: "
      },
      {
        type: "input",
        name: "units",
        message: "How many units of this item would you like?"
      }
    ])
    .then(function (response) {

      // postInsert(response.item, response.units);
      connection.query('select * from products where id=?', [response.item], function (err, data) {

        if (response.units < data[0].stock) {
          console.log('Your order is placed ...');
          console.log(`Your total purchase price ${response.units * data[0].price}`)
          let newQty = data[0].stock - response.units;
          connection.query("UPDATE products set stock= ? where id=?", [newQty, response.item], function (err, res) {
            if (err) throw err;
            console.log('Table updated ');
            // console.log();
            connection.end();
          });
        } else {
          console.log('Out of stock...');
        }

      });
    });


};

// function postInsert(item, units) {


// };