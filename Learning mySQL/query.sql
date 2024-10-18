-- MySQL is the world’s most popular open source database. 
-- According to DB-Engines, MySQL ranks as the second-most-popular database, behind Oracle Database. 
-- MySQL powers many of the most accessed applications, including Facebook, Twitter, Netflix, Uber, Airbnb, Shopify, and Booking.com.
-- MySQL is a relational database management system
-- MySQL is open-source
-- MySQL was first released in 1995
-- MySQL is developed, distributed, and supported by Oracle Corporation
-- MySQL is named after co-founder Monty Widenius's daughter: My
-- MySQL is ideal for both small and large applications
-- MySQL is very fast, reliable, scalable, and easy to use
-- MySQL is cross-platform
-- Data Looks like Excel Sheet (rows and column) and tables

--  Install Wamp Server (Step by Step)
-- https://youtu.be/M2at7D-lciw?si=pCAPj-9sHDd16y5P

--  Install mysql server, mysql client (workbench), mysql shell
--  https://www.youtube.com/watch?v=2om3byn2lxs
--  https://www.youtube.com/watch?v=GwHpIl0vqY4

-- Database file location
-- C:\ProgramData\MySQL\MySQL Server 8\data

-- Database Import in Mysql workbench
-- https://www.youtube.com/watch?v=7Cbm5vPQvNI


-- # Import Below sample database

-- # Sample Database 1
-- # https://github.com/mdanish0320/teaching-class/blob/master/JP-BE-PY-batch-1/mysql-class/sample-databases/e-commerce-vehicles/vehicle-store-db.sql

-- # Sample Database 2
-- # https://github.com/mdanish0320/teaching-class/tree/master/JP-BE-PY-batch-1/mysql-class/sample-databases/e-commerce-movies-rental


-- /// Create Database ///
CREATE DATABASE Aliyan_data;


-- /// Delete Database ///
DROP DATABASE Aliyan_data;


-- /// Used Database ///
USE DATABASE_NAME;  -- Only Workbench


-- /// Show Database & Tables ///
SHOW DATABASES;
SHOW TABlES;


-- /// Create Table ///
CREATE TABLE TABLE_NAME (
      COLUMN_NAME Datatype CONSTRAINT,
      COLUMN_NAME Datatype CONSTRAINT,
      COLUMN_NAME Datatype CONSTRAINT
);


-- /// Datatypes on MySQL ///
INT
VARCHAR(255)
CHAR(255)
DECIMAL(1,2)
BIGINT
FLOAT
BOOLEAN
DATE


-- /// Constraints on MySQL ///
PRIMARY KEY  -- (A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table)
FOREIGN KEY  -- (Prevents actions that would destroy links between tables)
NOT NULL     -- (Ensures that a column cannot have a NULL value)
UNIQUE       -- (Ensures that all values in a column are different)
DEFAULT      -- (Sets a default value for a column if no value is specified)


-- /// Arithmetic Operators MySQL ///
+  -- (Add)
-  -- (Subtract)
*  -- (Multiply)
/  -- (Divide)
%  -- (Modulos)


-- /// Comparison Operators MySQL ///
=  -- (Equal to)
>  -- (Greater than)
<  -- (Less than)
>= -- (Greater than or equal to)
<= -- (Less than or equal to)


-- /// Logical Operators MySQL ///
AND  -- (TRUE if all the conditions separated by AND is TRUE)
OR   -- (TRUE if any of the conditions separated by OR is TRUE)
NOT  -- (Displays a record if the condition(s) is NOT TRUE)
IN   -- (TRUE if the operand is equal to one of a list of expressions)
LIKE -- (TRUE if the operand matches a pattern)
BETWEEN  -- (TRUE if the operand is within the range of comparisons)
EXISTS  -- (TRUE if the subquery returns one or more records)


-- /// Read Data on Table ///
SELECT * FROM TABLE_NAME;


-- /// Delete Table ///
DROP TABLE TABLE_NAME;


-- /// Delete All Data on Table ///
TRUNCATE TABLE TABLE_NAME;  --(Delete All Data on Existing Table)


-- /// Add Coulumn on Table ///
ALTER TABLE TABLE_NAME ADD COLUMN COLUMN_NAME Datatype CONSTRAINT;


-- /// Delete Coulumn on Table ///
ALTER TABLE TABLE_NAME DROP COLUMN COLUMN_NAME;


-- /// Change Coulumn on Table ///
ALTER TABLE TABLE_NAME CHANGE COLUMN Old_Name New_Name New_Datatype New_Constraint;


-- /// Rename Table on MySQL ///
ALTER TABLE TABLE_NAME RENAME TO  NEW_TABLE_NAME ;


-- /// Insert Data on Table ///
INSERT INTO TABLE_NAME(COLUMN_NAME) VALUES();  -- 1st Method
INSERT INTO TABLE_NAME VALUES();   -- 2nd Method
INSERT INTO TABLE_NAME VALUES(),(), (), (), (), ();   --3rd Method Add Multiple Values


-- /// Update Data on Table ///
UPDATE TABLE_NAME SET COL_NAME = VALUE WHERE COL_NAME = VALUE;


-- /// Delete Data on Table ///
DELETE FROM TABLE_NAME WHERE COL_NAME = VALUE;


-- /// Sometime MySQL Workbech Error Safe Mode On this Command Run ///
SET SQL_SAFE_UPDATES = 0 ;


-- /// Add Primary Key & Auto_Increament on Creating Table ///
CREATE TABLE TABLE_NAME(
        COLUMN_NAME int PRIMARY KEY AUTO_INCREMENT,
);

---- Foreign Key Concept on MySQL ----

/* Go to the Table and Top Right Corner Operation Storage Engine ByDefault (MYISAM) Covert 
to (InnoDB). Go to Structure Tab Relation View Button Enable and Put the Forign Key Name, 
select Current Table Coulumn, Select Database, Select Second Table & Select Second Table, 
Two Table Values type Required Primary Key and INT.*/ 


---- JOIN (INNER JOIN, RIGHT JOIN, LEFT JOIN, CROSS JOIN) on MySQL  ----

SELECT * FROM TABLE_NAME_1 INNER JOIN TABLE_NAME_2 ON TABLE_NAME_1.COLUMN_1 = TABLE_NAME_2.COLUMN_2;
SELECT * FROM TABLE_NAME_1 LEFT JOIN TABLE_NAME_2 ON TABLE_NAME_1.COLUMN_1 = TABLE_NAME_2.COLUMN_2;
SELECT * FROM TABLE_NAME_1 RIGHT JOIN TABLE_NAME_2 ON TABLE_NAME_1.COLUMN_1 = TABLE_NAME_2.COLUMN_2;
SELECT * FROM TABLE_NAME_1 CROSS JOIN TABLE_NAME_2;


---- Aggregate Functions on MySQL  ----

MIN() -- Returns the smallest value within the selected column
MAX() -- Returns the largest value within the selected column
COUNT() -- Returns the number of rows in a set
SUM() -- Returns the total sum of a numerical column
AVG() -- Returns the average value of a numerical column
SELECT MAX(COLUMN_NAME) FROM TABLE_NAME;  --(Demo)


---- Limit on MySQL ----
SELECT * FROM TABLE_NAME LIMIT 2;


---- Offset Limit on MySQL  ----
SELECT * FROM TABLE_NAME LIMIT 10 OFFSET 0;
SELECT * FROM TABLE_NAME LIMIT 10 OFFSET 10;
SELECT * FROM TABLE_NAME LIMIT 10 OFFSET 20;


---- Distinct on MySQL ----
SELECT DISTINCT COLUMN_NAME FROM TABLE_NAME;


---- Where Clause on MySQL ----
SELECT * FROM TABLE_NAME WHERE COLUMN_NAME = 100;


---- Subquery & Nested Query on MySQL ----
SELECT * FROM TABLE_NAME WHERE COLUMN_NAME = (SELECT COLUMN_NAME FROM TABLE_NAME WHERE COLUMN_NAME = VALUES);


---- Order By (ASC & DESC) on MySQL  ----
SELECT * FROM TABLE_NAME ORDER BY COLUMN_NAME;  -- (By Default Asscending)
SELECT * FROM TABLE_NAME ORDER BY COLUMN_NAME ASC;
SELECT * FROM TABLE_NAME ORDER BY COLUMN_NAME DESC;


---- Group By (ASC & DESC) on MySQL  ----
SELECT COLUMN_NAME_1, COUNT(COLUMN_NAME_2) FROM TABLE_NAME GROUP BY COLUMN_NAME_1;


---- Having Clause on MySQL  ----
SELECT COLUMN_NAME_1, COUNT(COLUMN_NAME_2) FROM TABLE_NAME GROUP BY COLUMN_NAME_1 HAVING COUNT(COLUMN_NAME_2) > 5;


---- Alias on MySQL  ----
SELECT firstname AS fname, lastname AS lname FROM employees;


---- Union on MySQL  ----
SELECT COLUMN_NAME FROM TABLE_1 UNION SELECT COLUMN_NAME FROM TABLE_1;


---- Union All on MySQL  ----
SELECT COLUMN_NAME FROM TABLE_1 UNION All SELECT COLUMN_NAME FROM TABLE_1;