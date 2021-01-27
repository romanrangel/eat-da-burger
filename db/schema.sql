CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN
    PRIMARY KEY (id),
);

INSERT INTO burgers (burger_name)
VALUES ("Whopper");

INSERT INTO burgers (burger_name)
VALUES ("Sourdough");

INSERT INTO burgers (burger_name)
VALUES ("Deluxe Ribeye");