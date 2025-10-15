> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GOBJ

# Defining and Using Classes (Contents) | InterSystems IRIS Data Platform 2025.2

# Defining and Using Classes

Basic Ideas in Class Programming Defining Classes Compiling and Deploying Classes Creating Class Documentation Package Options Defining and Referring to Class Parameters Defining and Calling Methods Working with Registered Objects Defining and Using Properties Using Property Methods Introduction to Persistent Objects Storage Definitions Persistent Objects and Storage Globals Persistent Objects and Extents Working with Persistent Objects Object Concurrency Options Defining Persistent Classes Defining and Using Literal Properties Common Data Type Classes Common Property Parameters Working with Collection Classes Storage and SQL Projection of Collection Properties Working with Streams Defining and Using Object-Valued Properties Defining and Using Relationships Row-Level Security Other Options for Persistent Classes Defining Method and Trigger Generators Defining and Using Class Queries Defining Custom Class Queries Defining and Using XData Blocks Defining Class Projections Defining Callback Methods Overriding Property Methods Defining Data Type Classes Implementing Dynamic Dispatch Object-Specific ObjectScript Features Using the Populate Utility Using the %Dictionary Classes Using the Object Synchronization Feature

- Objects and Properties
- Methods
- Class Constants (Parameters)
- Class Definitions and Types
- Inheritance
- Classes as Containers of Methods
- Abstract Classes
- See Also

- Introduction to Terminology
- Kinds of Classes
- Kinds of Class Members
- Kinds of Properties
- Defining a Class: The Basics
- Naming Conventions
- Inheritance
- Introduction to Compiler Keywords
- See Also

- Compiling Programmatically
- Class Compiler Basics
- Class Compiler Notes
- Putting Classes in Deployed Mode
- See Also

- Introduction to the Class Reference
- Creating Documentation to Include in the Class Reference
- Using HTML Markup in Class Documentation
- See Also

- Overview of Packages
- Package Names
- Defining Packages
- Package Mapping
- Package Use When Referring to Classes
- Importing Packages
- See Also

- Introduction to Class Parameters
- Defining Class Parameters
- Parameter Types and Values
- Referring to Parameters of a Class
- See Also

- Introduction to Methods
- Defining Methods
- Specifying the Implementation Language
- Specifying Method Arguments: Basics
- Indicating How Arguments Are to Be Passed
- Skipping Arguments
- Specifying a Variable Number of Arguments
- Specifying Default Values
- Returning a Value
- Overriding Inherited Methods
- Restricting Access by Using Privilege Checks
- Types of Methods (CodeMode Options)
- Projecting a Method As an SQL Stored Procedure
- Calling Class Methods
- Casting a Method
- Overriding an Inherited Method
- See Also

- Introduction to Object Classes
- OREF Basics
- Creating New Objects
- Viewing Object Contents
- Introduction to Dot Syntax
- Validating Objects
- Determining an Object Type
- Cloning Objects
- Referring to Properties of an Instance
- Calling Methods of an Instance
- Getting the Class Name from an Instance
- $this Variable (Current Instance)
- i%PropertyName (Instance Variables)
- See Also

- Kinds of Properties
- Defining Properties
- Assigning Values to Properties
- Referring to Property Values
- Using Property Methods
- See Also

- Introduction
- Data Formats
- Reference
- Listing Property Methods
- See Also

- Persistent Classes
- Features Specific to Persistent Classes
- Introduction to the Default SQL Projection
- The Object ID
- The Object OID
- See Also

- Introduction to Storage Definitions
- Storage Classes
- Schema Evolution
- Resetting a Storage Definition
- Redefining a Persistent Class That Has Stored Data
- See Also

- Standard Global Names
- Hashed Global Names
- User-Defined Global Names
- Redefining Global Names
- Using Columnar Storage
- See Also

- Introduction to Extents
- Extent Definitions
- Extent Indexes
- Extent Queries
- See Also

- Saving Objects
- Testing the Existence of Saved Objects
- Opening Saved Objects
- The Internal Reference Count
- Swizzling
- Reading Stored Values
- Deleting Saved Objects
- Accessing Object Identifiers
- See Also

- Why Specify Concurrency?
- Options
- Concurrency Values
- Concurrency and Swizzled Objects
- Version Checking (Alternative to Concurrency Argument)
- See Also

- Defining a Persistent Class
- Projection of Packages to Schemas
- Specifying the Table Name for a Persistent Class
- Controlling How IDs Are Generated
- Controlling the SQL Projection of Subclasses
- See Also

- Defining Literal Properties
- Defining an Initial Expression for a Property
- Defining a Property As Required
- Defining a Computed Property
- Defining a Multidimensional Property
- Defining Enumerated Properties
- Specifying Values for Literal Properties
- Controlling the SQL Projection of Literal Properties
- See Also

- Introduction
- Data Type Classes Grouped by SqlCategory
- Data Type Classes Grouped by OdbcType
- Data Type Classes Grouped by ClientDataType
- See Also

- Introduction
- Available Property Parameters, Listed by Data Type Class
- Property Parameter Reference
- See Also

- Introduction to Collections
- Defining Collection Properties
- Defining Standalone Collections
- Working with List Collections
- Working with Array Collections
- Copying Collection Data
- See Also

- Default Storage and Projection of List Properties
- Default Storage and Projection of Array Properties
- Controlling Storage of Collection Properties
- Controlling the SQL Projection
- Controlling the Name of the Projected Child Table
- See Also

- Introduction to Stream Classes
- Defining Stream Properties
- Using the Stream Interface
- Stream Classes for Use with gzip Files
- Projection of Stream Properties to SQL and ODBC
- Stream Compression
- See Also

- Defining Object-Valued Properties
- Introduction to Serial Objects
- Possible Combinations of Objects
- Specifying the Value of an Object Property
- Saving Changes
- SQL Projection of Object-Valued Properties
- See Also

- Overview of Relationships
- Defining a Relationship
- Examples
- Connecting Objects
- Removing a Relationship
- Deleting Objects from Relationships
- Working with Relationships
- SQL Projection of Relationships
- Creating Many-to-Many Relationships
- See Also

- Introduction
- Setting Up Row-Level Security
- Adding Row-Level Security to a Table with Existing Data
- Performance Tips and Information
- Security Tips and Information
- See Also

- Defining a Sharded Class
- Defining a Read-Only Class
- Adding Indexes
- Adding Foreign Keys
- Adding Triggers
- Referring to Fields from ObjectScript
- See Also

- Introduction
- Basics
- How Generators Work
- Values Available to Method Generators
- Values Available to Trigger Generators
- Defining Method Generators
- Generators and INT Code
- Effect on Subclasses
- See Also

- Introduction to Class Queries
- Using Class Queries
- Defining Basic Class Queries
- Parameters of the Class Query
- Example
- Maximum Length of String Parameters
- See Also

- Defining Custom Class Queries
- Defining the Methods
- Defining Parameters for Custom Queries
- When to Use Custom Queries
- SQL Cursors and Class Queries
- See Also

- Basics
- XML Example
- JSON Example
- YAML Example

- Introduction
- Adding a Projection to a Class
- Creating a New Projection Class
- See Also

- Available Callbacks in Object Classes
- %OnAddToSaveSet()
- %OnAfterBuildIndices()
- %OnAfterDelete()
- %OnAfterPurgeIndices()
- %OnAfterSave()
- %OnBeforeBuildIndices()
- %OnBeforePurgeIndices()
- %OnBeforeSave()
- %OnClose()
- %OnConstructClone()
- %OnDelete()
- %OnDeleteFinally()
- %OnNew()
- %OnOpen()
- %OnOpenFinally()
- %OnReload()
- %OnRollBack()
- %OnSaveFinally()
- %OnValidateObject()
- %OnDetermineClass()
- Triggers as an Alternative
- See Also

- How Property Methods Are Defined
- Overriding a Property Getter Method
- Overriding a Property Setter Method
- Defining an Object-Valued Property with a Custom Accessor Method
- See Also

- Introduction
- Parameters in Data Type Classes
- Defining a Data Type Class
- Defining Class Methods in Data Type Classes
- Defining Instance Methods in Data Type Classes
- See Also

- Introduction to Dynamic Dispatch
- Content of Methods Implementing Dynamic Dispatch
- The Dynamic Dispatch Methods
- See Also

- Relative Dot Syntax (..)
- ##class Syntax
- $this Syntax
- ##super Syntax
- $CLASSNAME and Other Dynamic Access Functions
- i%<PropertyName> Syntax
- ..#<Parameter> Syntax

- Data Population Basics
- Default Behavior
- Specifying the POPSPEC Parameter
- Basing One Generated Property on Another
- How %Populate Works
- Custom Populate Actions and the OnPopulate() Method
- Alternative Approach: Creating a Utility Method

- Introduction to Class Definition Classes
- Browsing Class Definitions
- Modifying Class Definitions
- See Also

- Introduction to Object Synchronization
- Modifying the Classes to Support Synchronization
- Performing the Synchronization
- Translating Between GUIDs and OIDs
- Manually Updating a SyncTime Table
