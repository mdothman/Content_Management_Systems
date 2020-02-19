const orm = require("../config/orm.js");

const company = {
    viewAllDepartments: function(cB) {
        orm.all("department", function(result) {
            cB(result)
        })
    },
    viewAllRoles: function(cB) {
        orm.all("role", function(result) {
            cB(result)
        })
    },
    viewAllEmployees: function(cB) {
        orm.all("employee", function(result) {
            cB(result)
        })
    },
    addDepartment: function(colls, values, cB) {
        orm.create("department", colls, values, cB, function(result) {
            cB(result)
        })
    },
    addRole: function(colls, values, cB) {
        orm.create("role", colls, values, cB, function(result) {
            cB(result)
        })
    },
    addEmployee: function(colls, values, cB) {
        orm.create("employee", colls, values, cB, function(result) {
            cB(result)
        })
    }





}
module.exports = company