INSERT INTO departments (department_name) 
VALUES ("Sales"),("Engineering"),("Finance"),("Legal");

INSERT INTO role (role_title, role_salary, department_id)
VALUES 
("Sales Manager", 150000, 1),
("Sales Rep", 100000, 1),
("Marketing Rep", 80000, 1),
("Lead Engineer", 150000, 2),
("Back-end Engineer", 130000, 2),
("Front-end Engineer", 120000, 2),
("Finance Manager", 130000,3),
("Accountant", 120000,3),
("Book Keeper", 100000,3),
("Legal Team Lead", 200000, 4),
("Lawyer", 150000, 4),
("Legal Team Manager", 100000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Charlie", "Eissler", 1, null),
("Kim", "Eissler", 2, 1),
("Evan", "Mares", 3, 1),
("Antony", "Smelianski", 4, null),
("Jake", "Eissler", 5, 4),
("James", "Notary", 6, 4),
("Austin", "Meuller", 7, null),
("Christian", "Wolff", 8, 7),
("Dana", "Cummings", 9, 7),
("Matt", "Murdock", 10, null),
("Foggy", "Nelson", 11, 10),
("Karen", "Page", 12, 10);