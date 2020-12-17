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
            choices: ["View All Employees", "View All Roles", "View All Departments", "View Employees by Department", "Add Role", "Add Department", "Add Employee", "Update Employee"],
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
                case "Update Employee":
                    updateEmployee();
                    break;
            }
        })
  };

const viewAllEmployees = () => {
    console.log("testing");
    //SELECT LEFT JOIN 
};

const viewAllRoles = () => {
    console.log("testing");
    //
}

const viewAllDepts = () => {
    console.log("testing");
}

const viewEmployeesByDept = () => {
    console.log("testing");
    //
}

const addRole = () => {
    console.log("testing");
}

const addDept = () => {
    console.log("testing");
}

const addEmployee = () => {
    console.log("testing");
}

const updateEmployee = () => {
    console.log("testing");
}



