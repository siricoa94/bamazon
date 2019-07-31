CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	id INT AUTO_INCREMENT NOT NULL,
    product VARCHAR(30),
    department VARCHAR(30),
    stock INT(10) NOT NULL,
    price FLOAT(10,2),
    PRIMARY KEY (id)
);
INSERT INTO products (product, department, stock, price)
VALUES("computer","technology","1","750.00");
INSERT INTO products (product, department, stock, price)
VALUES("Ipad","technology","1","400.00");
INSERT INTO products (product, department, stock, price)
VALUES("Chianti","Foods & Beverage","60","21.50");
INSERT INTO products (product, department, stock, price)
VALUES("Tent","Outdoors","1","350.00");
INSERT INTO products (product, department, stock, price)
VALUES("Eggs","Foods & Beverage","10000000.00",".50");
INSERT INTO products (product, department, stock, price)
VALUES("Milk","Foods & Beverage","0","4.50");
INSERT INTO products (product, department, stock, price)
VALUES("Axe","Outdoors","20","75.00");
INSERT INTO products (product, department, stock, price)
VALUES("Fireworks","Party Supplies","500","45.00");
INSERT INTO products (product, department, stock, price)
VALUES("Party Hats","Party Supplies","10","5.00");
INSERT INTO products (product, department, stock, price)
VALUES("School Bus","Party Supplies","10","30000.00")

    