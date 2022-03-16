DROP DATABASE IF EXISTS ems_db;
CREATE DATABASE ems_db;

USE ems_db;

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
 role_id INT AUTO_INCREMENT PRIMARY KEY,
 role_title VARCHAR(30) NOT NULL,
 role_salary DECIMAL NOT NULL,
 department_id INT
FOREIGN KEY (department_id)
REFERENCES departments(department_id)
ON DELETE SET NULL
);

CREATE TABLE employee (
employee_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id)
REFERENCES role(role_id)
ON DELETE SET NULL
);