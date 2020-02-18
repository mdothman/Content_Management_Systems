CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employee
(
id INT NOT NULL AUTO_INCREMENT;

first_name VARCHAR(30)NOT NULL;

last_name VARCHAR(30)NOT NULL;

role_id INT FOREIGN KEY;

manager_id INT FOREIGN KEY;

PRIMARY KEY (id);
)

CREATE TABLE role
(
id INT NOT NULL AUTO_INCREMENT;

title VARCHAR(30) NOT NULL;

salary DECIMAL;

department_id INT FOREIGN KEY;

PRIMARY KEY (id);
)

CREATE TABLE department
(
    id INT NOT NULL AUTO_INCREMENT;

    name VARCHAR(30)

    PRIMARY KEY (id);
)