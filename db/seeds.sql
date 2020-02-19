insert into department (name) values("Web-Development");
insert into department (name) VALUES ("Management");

INSERT INTO role (title, salary, department_id) values ("Manager",4000,2);
INSERT INTO role (title, salary, department_id) values ("Full-Stack Web-Developer",3000,1);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jane","Doe",1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dean","Othman",2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John","Doe",2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Josh","Dane",2,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Clark","Kent",2,1);





SELECT * FROM `company_db`.`employee`;

