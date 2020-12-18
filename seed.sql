DROP DATABASE IF EXISTS cms_db;

CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NULL
);

INSERT INTO department 
(name) 
VALUES 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");

CREATE TABLE role (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id) 
);

INSERT INTO role 
(title, salary, department_id) 
VALUES 
("Sales Lead", 150000.00, 1), 
("Sales Manager", 85000.00, 1), 
("Engineer Lead", 175000.00, 2), 
("Engineer", 125000.00, 2), 
("Accounting Lead", 185000.00, 3), 
("Accountant", 150000.00, 3), 
("Legal Team Lead", 200000.00, 4), 
("Lawyer", 180000.00, 4); 

CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
("John", "Smith", 1, null),
("Jane", "Jones", 2, 1),
("Kim", "Harris", 3, null),
("Kenny", "Chen", 4, 3),
("Fred", "Franklin", 5, null),
("Fran", "Gibson", 6, 5),
("Ashley", "Howard", 7, null), 
("Vince", "Bridges", 8, 7);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;