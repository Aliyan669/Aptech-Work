-- //////  All MySQL Query  ///////
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
        student_id int PRIMARY KEY AUTOI_INCREMENT,
);

---- Foreign Key Concept on MySQL ----

/* Go to the Table and Top Right Corner Operation Storage Engine ByDefault (MYISAM) Covert 
to (InnoDB). Go to Structure Tab Relation View Button Enable and Put the Forign Key Name, 
select Current Table Coulumn, Select Database, Select Second Table & Select Second Table, 
Two Table Values type Required Primary Key and INT.*/ 

---- Aggregate Functions on MySQL  ----

MIN() -- Returns the smallest value within the selected column
MAX() -- Returns the largest value within the selected column
COUNT() -- Returns the number of rows in a set
SUM() -- Returns the total sum of a numerical column
AVG() -- Returns the average value of a numerical column
SELECT MAX(COLUMN_NAME) FROM TABLE_NAME;  --(Demo)

---- ORDER BY (ASC & DESC) on MySQL  ----

SELECT * FROM TABLE_NAME ORDER BY COLUMN_NAME;  -- (By Default Asscending)
SELECT * FROM TABLE_NAME ORDER BY COLUMN_NAME ASC;
SELECT * FROM TABLE_NAME ORDER BY COLUMN_NAME DESC;

---- LIMIT on MySQL ----
SELECT * FROM TABLE_NAME LIMIT 2;

---- WHERE on MySQL ----
SELECT * FROM TABLE_NAME WHERE COLUMN_NAME = 100
