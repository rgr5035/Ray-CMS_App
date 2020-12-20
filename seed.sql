--Database seed data entered into mySQL Workbench

--Initial department value entry into department table
INSERT INTO department 
(name) 
VALUES 
("Sales"), 
("Engineering"), 
("Finance"), 
("Legal");

--Initial role value data entry into role table
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

--Initial employee value data entry into employee table
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