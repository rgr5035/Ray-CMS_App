//variable declarations to require npm packages that were installed for functionality
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

//connection information
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'N!cholas15',
    database: 'cms_db',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    initSearch();
  });

//runs initial search of prompts for user to choose from, each will be directed to a new callback function based on user choice
const initSearch = () => {
    inquirer
        .prompt({
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Roles", "View All Departments", "View Employees by Department", "Add Role", "Add Department", "Add Employee", "Update Employee Role", "Exit"],
            name: "choice",
        })
        .then((data) => {
            switch (data.choice) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "View All Departments":
                    viewAllDepts();
                    break;
                case "View Employees by Department":
                    viewEmployeesByDept();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Department":
                    addDept();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployee();
                    break;
                case "Exit":
                    connection.end();
            }
        })
  };

const viewAllEmployees = () => {
    //SELECT LEFT JOIN
    const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        initSearch();
    })
     
};

const viewAllRoles = () => {
    //SELECT LEFT JOIN
    const query = "SELECT * FROM role";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        initSearch();
    })
};

const viewAllDepts = () => {
    console.log("testing");
    //SELECT LEFT JOIN
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {

    })
    initSearch();
}

const viewEmployeesByDept = () => {
    console.log("testing");
    inquirer
        .prompt({
            type: "rawlist",
            message: "Which department would you like to see?",
            choices: ["Sales", "Engineering", "Finance", "Legal"],
            name: "department",
        })
        .then((data) => {
            switch (data.department) {
                case "Sales":
                    viewSales(); //or just the connection.query code, not sure yet
                    break;
                case "Engineering":
                    viewEngineering(); //or just the connection.query code, not sure yet
                    break;
                case "Finance":
                    viewFinance(); //or just the connection.query code, not sure yet
                    break;
                case "Legal":
                    viewLegal(); //or just the connection.query code, not sure yet
                    break;
            }
        })
    //
    // initSearch();
};

const addRole = () => {
    console.log("testing");
    //INSERT INTO
    inquirer
        .prompt({
            type: "input",
            message: "What new role title would you like to add?",
            name: "newTitle",
        },
        {
            type: "input",
            message: "What is the salary of the new role? (Please use numbers only with no spaces or commas)",
            name: "newSalary",
        },
        {
            type: "input",
            message: "Which department does this role belong to?", //Not sure about this question, confused
            name: "deptId",
        })
        .then((data) => {
            //INSERT INTO CODE HERE?
        })
    // initSearch();
}

const addDept = () => {
    console.log("testing");
    //INSERT INTO
    inquirer
        .prompt({
            type: "input",
            message: "What department would you like to add?",
            name: "department",
        })
        .then((data) => {
            //INSERT INTO CODE HERE?
            const query = "INSERT INTO department WHERE "
        })
    // initSearch();
}

const addEmployee = () => {
    console.log("testing");
    //INSERT INTO
    inquirer
        .prompt({
            type: "input",
            message: "Please enter the new employee's first name:",
            name: "firstName",
        },
        {
            type: "input",
            message: "Please enter the new employee's last name:",
            name: "lastName",
        },
        {
            type: "input",
            message: "",
            name: "",
        })
    // initSearch();
}

const updateEmployee = () => {
    console.log("testing");
    //UPDATE SET
    // inquirer
    //     .prompt({
    //         type: ""
    //     })
    // initSearch();
}



