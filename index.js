const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "1234code",
    database: "ems_db",
  },
  console.log(`Connected to the ems_db database.`)
);

//Init Inquirer
const init = function () {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select an option:",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
        name: "options",
      },
    ])
    .then((response) => {
      if (response.options === "View Departments") {
        viewDept();
      } else if (response.options === "View Roles") {
        viewRoles();
      } else if (response.options === "View Employees") {
        viewEmployees();
      } else if (response.options === "Add Department") {
        addDept();
      } else if (response.options === "Add Role") {
        addRole();
      } else if (response.options === "Add Employee") {
        addEmployee();
      } else if (response.options === "Update Employee Role") {
        someFtn();
      } else {
        byeBye();
      }
    });
};
init();
//----- functions for responses -----
//view department
const viewDept = function () {
  db.query("SELECT * FROM departments", function (err, results) {
    console.table(results);
    init();
  });
};
const viewRoles = function () {
  db.query(
    "SELECT * FROM role JOIN departments ON role.department_id = departments.department_id;",
    function (err, results) {
      console.table(results);
      init();
    }
  );
};
const viewEmployees = function () {
  db.query(
    "SELECT * FROM employee JOIN role ON employee.employee_id = role.role_id JOIN departments ON role.department_id = departments.department_id;",
    function (err, results) {
      console.table(results);
      init();
    }
  );
};
const addDept = function () {
  inquirer
    .prompt([{ type: "input", message: "Department Name:", name: "newDept" }])
    .then((response) => {
      db.query(
        "INSERT INTO departments SET ?",
        {
          department_name: response.newDept,
        },
        (err) => {
          if (err) console.log(err);
          console.log(`${response.newDept} added to departments!`);
        }
      );
      viewDept();
    });
};
const addRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Role Title:",
        name: "newRole",
      },
      {
        type: "number",
        message: "Salary:",
        name: "newSalary",
      },
      {
        type: "number",
        message: "Department ID (1-4)",
        name: "depId",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO role SET ?",
        {
          role_title: response.newRole,
          role_salary: response.newSalary,
          department_id: response.depId,
        },
        (err) => {
          if (err) console.log(err);
          console.log(`${response.newRole} added to Roles!`);
        }
      );
      viewRoles();
    });
};
const addEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "First Name:",
        name: "empFirstName",
      },
      {
        type: "input",
        message: "Last Name:",
        name: "empLastName",
      },
      {
        type: "input",
        message: "Role ID: (1-12)",
        name: "empRole",
      },
      {
        type: "input",
        message: "Manager ID: (1-4)",
        name: "empManagerId",
      },
    ])
    .then((response) => {
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: response.empFirstName,
          last_name: response.empLastName,
          role_id: response.empRole,
          manager_id: response.empManagerId,
        },
        (err) => {
          if (err) console.log(err);
          console.log(
            `${response.empFirstName} ${response.empLastName} has been added as an employee!`
          );
        }
      );
      viewEmployees();
    });
};
