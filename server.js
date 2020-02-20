const inquirer = require("inquirer");
const corp = require("./models/company.js");
const connection = require("./config/connection.js")



connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    CMS()
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
                    corp.viewAllDepartments(function(data) {
                        console.log(data);
                        CMS();
                    });
                    break;

                case "View all roles":
                    corp.viewAllRoles(function(data) {
                        console.log(data);
                        CMS();
                    });
                    break;

                case "View all employees":
                    corp.viewAllEmployees(function(data) {
                        console.log(data);
                        CMS();
                    });
                    break;

                case "Add a department":
                    getDepartmentInfo()
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
                default:
                    connection.end()


            }


        })
}

function getDepartmentInfo() {
    inquirer.prompt({
            name: "name",
            type: "input",
            message: "What is the name of the department you would like to add?",
            validate: function(department) {
                if (department.length !== 0) {
                    return true;
                }
                return false;
            }

        })
        .then(function(answer) {
            let name = answer.name
            corp.addDepartment(
                "name", name.toString(),
                function(result) {
                    console.log(result)
                    connection.end()
                });
            CMS();
        })
}