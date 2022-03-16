const express = require("express");
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const { response } = require("express");

const PORT = process.env.PORT || 9420;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        someFtn();
      } else if (response.options === "View Employees") {
        someFtn();
      } else if (response.options === "Add Department") {
        someFtn();
      } else if (response.options === "Add Role") {
        someFtn();
      } else if (response.options === "Add Employee") {
        someFtn();
      } else if (response.options === "Update Employee Role") {
        someFtn();
      } else {
        byeBye();
      }
    });
};
//----- functions for responses -----
//view department
const viewDept = function () {
  db.query("SELECT * FROM departments", function (err, results) {
    console.table(results);
    init();
  });
};

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
//Port Listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
