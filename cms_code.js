//variable declarations to require npm packages that were installed for functionality
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const logo = require("asciiart-logo");

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
    viewLogo();
    initSearch();
  });


const viewLogo = () => {
  console.log(
    logo({
        name: 'Employee Manager',
        font: 'Soft',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'grey',
        logoColor: 'bold-green',
        textColor: 'green',
    })
    .render()
)};


//runs initial search of prompts for user to choose from, each will be directed to a new callback function based on user choice
const initSearch = () => {
    inquirer
        .prompt({
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Roles", "View All Departments", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"],
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
                case "Add Department":
                    addDept();
                    break;
                case "Add Role":
                    addRole();
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
    //SELECT LEFT JOIN
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        initSearch();
    })
    
}

const addDept = () => {
    //INSERT INTO
    inquirer
        .prompt({
            type: "input",
            message: "What department would you like to add?",
            name: "department",
        })
        .then((data) => {
            //INSERT INTO CODE HERE?
            const query = "INSERT INTO department SET ?"
            connection.query(query, { name: data.department }, (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} Department added!`);
                initSearch();
            })
        })
};


const addRole = () => {
    //INSERT INTO
    inquirer
        .prompt([{
            type: "input",
            message: "What new role title would you like to add?",
            name: "newTitle",
        },
        {
            type: "number",
            message: "What is the salary of the new role? (Please use numbers only with no spaces or commas)",
            name: "newSalary",
        },
        {
            type: "number",
            message: "Which department ID does this role belong to?", //Not sure about this question, confused
            name: "deptId",
        }])
        .then((data) => {
            //INSERT INTO CODE HERE?
            const query = "INSERT INTO role SET ?"
            connection.query(
                query, 
                { 
                    title: data.newTitle, 
                    salary: data.newSalary,
                    department_id: data.deptId,
                }, 
                (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} Role has been added!`);
                    initSearch();
                })
        })
};


const addEmployee = () => {
    //INSERT INTO
    inquirer
        .prompt([{
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
            type: "number",
            message: "Please enter the new employee's role ID:",
            name: "roleID",
        },
        {
            type: "number",
            message: "Please enter the new employee's manager ID:",
            name: "managerID",
        }])
        .then((data) => {
            //INSERT INTO CODE HERE?
            const query = "INSERT INTO employee SET ?"
            connection.query(
                query, 
                { 
                    first_name: data.firstName, 
                    last_name: data.lastName,
                    role_id: data.roleID,
                    manager_id: data.managerID,
                }, 
                (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} Employee has been added!`);
                    initSearch();
                })
        })
}


const updateEmployee = () => {
    console.log("testing");
    //UPDATE SET
    inquirer
        .prompt([{
            type: "input",
            message: "Please enter the first name of the employee:",
            name: "firstName",
        },
        {
            type: "input",
            message: "Please enter the last name of the employee:",
            name: "lastName",
        },
        {
            type: "number",
            message: "Please enter the new role ID for the employee:",
            name: "newRoleID",
        }])
        .then((data) => {
            const query = "UPDATE employee SET ? WHERE ?";
            connection.query(
                query,
                [
                {
                    role_id: data.newRoleID,
                },
                {
                    first_name: data.firstName, 
                },
                {
                    last_name: data.lastName,
                },
                ], 
                (err, res) => {
                    if (err) throw err;
                    console.log(`${res.affectedRows} Role has been updated!`);
                    initSearch();
                })
        })
};



