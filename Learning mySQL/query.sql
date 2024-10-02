-- //////  All mySQL Query  ///////
--  Install Wamp Server (Step by Step)
-- https://youtu.be/M2at7D-lciw?si=pCAPj-9sHDd16y5P

-- /// Create Database ///
CREATE DATABASE Aliyan_data;

-- /// Create Table ///
CREATE TABLE Student (
        student_id int,
        student_name varchar(50),
        student_email varchar(50)
);

-- /// Insert Data on Table ///
INSERT INTO Student (student_id, student_name, student_email)
VALUES (1, 'Aliyan', "aliyanamir@gmail.com"),
       (2, 'Fahad', "fahad@gmail.com")


-- /// Read Data on Table ///
SELECT * FROM Student;


-- /// Add Primary Key & Auto_Increament on Creating Table ///
CREATE TABLE Student (
        student_id int PRIMARY KEY AUTOINCREMENT,
);