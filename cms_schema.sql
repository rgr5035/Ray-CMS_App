DROP DATABASE IF EXISTS cms_db;

CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NULL
);

CREATE TABLE role (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INT
);

CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT NULL
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;