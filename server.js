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
                    getRoletInfo()
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
            connection.query(`INSERT INTO department(name) VALUES ("${name}")`);
            console.log(`${name} was added as a department`);
            CMS();
        })
};

function getRoletInfo() {
    connection.query('SELECT * FROM department', function(err, results) {
        if (err) throw err;
        inquirer.prompt([{
                    name: "department",
                    type: "rawlist",
                    choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].name);
                        }
                        return choiceArray;
                    },
                    message: "What department will you assign this role to?"
                }, {
                    name: "role",
                    type: "input",
                    message: "What is the name of the role you would like to add?",
                    validate: function(role) {
                        if (role.length !== 0) {
                            return true;
                        }
                        return false;
                    }

                }, {
                    name: "salary",
                    type: "input",
                    message: "What will be the monthly salary for this role?",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }

                }

            ])
            .then(function(answer) {
                let role = answer.role;
                let salary = answer.salary;
                let chosenDepartment;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].name === answer.department) {
                        chosenDepartment = results[i];
                    }
                }
                connection.query(
                    "INSERT INTO role SET ?", {
                        title: role,
                        salary: salary,
                        department_id: chosenDepartment.id || 0
                    },
                    function(error) {
                        if (error) throw err;
                        console.log("Role was successfully added");
                        CMS();
                    })


                // connection.query(`INSERT INTO department(name) VALUES ("${name}")`);
                // console.log(`${name} was added as a department`);

            })
    })

}

function getEmployeeInfo() {
    connection.query('SELECT * FROM role', function(err, results) {
        if (err) throw err;
        inquirer.prompt([{
                    name: "role",
                    type: "rawlist",
                    choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].name);
                        }
                        return choiceArray;
                    },
                    message: "What role will you assign this person to?"
                }, {
                    name: "first",
                    type: "input",
                    message: "What is the name of the role you would like to add?",
                    validate: function(name) {
                        if (name.length !== 0) {
                            return true;
                        }
                        return false;
                    }

                }, {
                    name: "last",
                    type: "input",
                    message: "What will be the monthly salary for this role?",
                    validate: function(name) {
                        if (name.length !== 0) {
                            return true;
                        }
                        return false;
                    }

                }

            ])
            .then(function(answer) {
                let last = answer.last;
                let first = answer.first;
                let chosenDepartment;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].name === answer.department) {
                        chosenDepartment = results[i];
                    }
                }
                connection.query(
                    "INSERT INTO role SET ?", {
                        title: role,
                        salary: salary,
                        department_id: chosenDepartment.id || 0
                    },
                    function(error) {
                        if (error) throw err;
                        console.log("Role was successfully added");
                        CMS();
                    })


                // connection.query(`INSERT INTO department(name) VALUES ("${name}")`);
                // console.log(`${name} was added as a department`);

            })
    })

}