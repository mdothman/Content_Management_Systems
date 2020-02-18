const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "company_db"
});

connection.connect(function(err) {
    if (err) throw err;
    CMS();
});

function CMS() {
    inquirer
        .prompt({
            name: "foreman",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role"
            ]
        })
        .then(function(answer) {
            switch (answer.foreman) {
                case "View all departments":
                    viewAllDepartments();
                    break;

                case "View all roles":
                    viewAllRoles();
                    break;

                case "View all employees":
                    viewAllEmployees();
                    break;

                case "Add a department":
                    addADepartment();
                    break;

                case "Add a role":
                    addARole();
                    break;

                case "Add an employee":
                    addAnEmployee();
                    break;

                case "Update employee role":
                    updateEmployeeRole();
                    break;


            }


        })
}