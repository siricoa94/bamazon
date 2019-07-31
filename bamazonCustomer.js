var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Adriana98!",
    database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    printID();
    // printItem();
    connection.end();
});












function printID() {
connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log()
    console.log(res);
    console.log()
});
}
// function printItem(item) {
//     connection.query("SELECT * FROM products where product='" + item + "'", function(err, res) {
//     if (err) throw err;
//     console.log()
//     console.log(res);
//     console.log()
    
//     });
// }

  