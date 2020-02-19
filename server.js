const inquirer = require("inquirer");
const models = require("./models/company.js");

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