> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GSQL

# Using InterSystems SQL (Contents) | InterSystems IRIS Data Platform 2025.2

# Using InterSystems SQL

Using InterSystems SQL InterSystems SQL Features InterSystems SQL Basics Language Elements Implicit Joins (Arrow Syntax) Identifiers Using Embedded SQL Using Dynamic SQL Using the SQL Shell Interface Using the Management Portal SQL Interface Defining Tables Defining and Using Views Relationships Between Tables Using Triggers Collation Federated Tables Foreign Tables Modifying the Database Querying the Database Defining and Using Stored Procedures Storing and Using Stream Data (BLOBs and CLOBs) SQL Users, Roles, and Privileges Using Vector Search SQL Settings Reference Importing SQL Code Importing and Exporting SQL Data

- Get Started
- Topics

- Architecture
- Features
- Interoperability
- Limitations

- Tables
- Queries
- Privileges
- SelectMode
- Data Collation
- Executing SQL

- Commands and Keywords
- Functions: Intrinsic and Extrinsic
- Literals
- NULL and the Empty String
- Arithmetic Operators and Functions
- Relational Operators
- Logical Operators
- Comments

- Property Reference
- Child Table Reference
- Arrow Syntax Privileges

- Simple Identifiers
- Delimited Identifiers
- SQL Reserved Words

- Compiling Embedded SQL
- Embedded SQL Syntax
- Embedded SQL Code
- Host Variables
- SQL Cursors
- Embedded SQL Variables
- Embedded SQL in Methods of a Persistent Class
- Validating Embedded SQL Code
- Auditing Embedded SQL

- Introduction to Dynamic SQL
- The %SQL.Statement Class
- Creating an Object Instance
- Preparing an SQL Statement
- Executing an SQL Statement
- Returning the Full Result Set
- Returning Specific Values from the Result Set
- Returning Multiple Result Sets
- SQL Metadata
- Auditing Dynamic SQL

- Invoking the SQL Shell
- Storing and Recalling SQL Statements
- Purging Cached Queries
- Configuring the SQL Shell
- SQL Metadata, Query Plan, and Performance Metrics
- Transact-SQL Support
- Other Ways of Executing SQL

- Management Portal SQL Facilities
- Executing SQL Query
- Filtering Schema Contents
- Catalog Details
- Wizards
- Actions
- Open Table
- Tools
- SQL Process View
- Diagnostic Logs

- Table Names and Schema Names
- Schema Name
- Table Name
- RowID Field
- Primary Key
- RowVersion, AutoIncrement, and Serial Counter Fields
- Defining a Table by Using DDL
- Defining a Table by Creating a Persistent Class
- Defining a Sharded Table
- Defining a Table by Querying an Existing Table
- Listing Tables
- Listing Column Names and Numbers
- Listing Constraints

- Creating a View
- Altering a View
- Updateable Views
- Read-only Views
- View ID: %VID
- Listing View Properties
- Listing View Dependencies

- Defining a Foreign Key
- Foreign Key Referential Integrity Checking
- Parent and Child Tables

- Defining Triggers
- Types of Triggers
- ObjectScript Trigger Code
- Python Trigger Code
- Pulling Triggers
- Triggers and Object Access
- Triggers and Transactions
- Listing Triggers

- Collation Types
- Namespace-wide Default Collation
- Table Field/Property Definition Collation
- Index Definition Collation
- Query Collation
- Legacy Collation Types
- SQL and NLS Collations

- Requirements for Creating a Federated Table
- Creating a Federated Table
- Querying a Federated Table
- Dropping or Disconnecting a Federated Table

- Introduction to Foreign Tables
- Creating a Foreign Table
- Querying a Foreign Table
- Deleting a Foreign Table

- Inserting Data
- UPDATE Statements
- Computed Field Values on INSERT or UPDATE
- Validating Data
- DELETE Statements
- Transaction Processing

- Types of Queries
- Using a SELECT Statement
- Defining and Executing Named Queries
- Queries Invoking User-defined Functions
- Querying Serial Object Properties
- Querying Collections
- Queries Invoking Free-text Search
- Pseudo-Field Variables
- Query Metadata
- Queries and Enterprise Cache Protocol (ECP)
- Cached Queries

- Overview
- Defining a Stored Procedure Using DDL
- SQL to Class Name Transformations
- Defining a Method Stored Procedure using Classes
- Defining a Query Stored Procedure using Classes
- Customized Class Queries
- Using Stored Procedures
- Listing Procedures

- Stream Fields and SQL
- Stream Field Concurrency Locking
- Using Stream Fields within InterSystems IRIS Methods
- Using Stream Fields from ODBC
- Using Stream Fields from JDBC

- SQL Privileges and System Privileges
- %Admin_Secure Permission
- %Admin_RoleEdit Permission
- %Admin_UserEdit Permission
- Users
- Roles
- SQL Privileges

- Vectors and Embeddings
- Inserting VECTOR-typed Data
- Inserting EMBEDDING-typed Data
- Define a Vector Index
- Perform Vector Search
- See More

- How to Change Each SQL Setting
- Settings that Require Permissions

- Importing SQL with LOAD SQL
- Importing InterSystems SQL with ObjectScript
- Importing non-InterSystems SQL with ObjectScript

- Importing Data with LOAD DATA
- Exporting Data to a Text File
