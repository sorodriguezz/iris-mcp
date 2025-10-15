> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GOBJ_classes

# Defining Classes | Defining and Using Classes | InterSystems IRIS Data Platform 2025.2

### Is this page helpful?

Please select a reason: Submit Cancel

Please select a reason: Submit Cancel

#### Please select a reason:

Easy to understand Well organized Found what I was looking for Enjoying the new design! Other
Submit Cancel

#### Please select a reason:

Hard to understand Content displayed poorly Didn't find what I needed I prefer the old design better Other
Submit Cancel

# Defining Classes

Contents

- Terminology
- Kinds of Classes
- Class Members
- Properties
- Basics
- Naming Conventions
- Inheritance
- Compiler Keywords
- See Also
This topic describes the basics of defining classes in InterSystems IRIS® data platform.
Introduction to Terminology The following shows a simple InterSystems IRIS class definition, with some typical elements: Note the following points: This class refers to several system classes provided by InterSystems IRIS. These classes are %RegisteredObjectOpens in a new tab (whose full name is %Library.RegisteredObjectOpens in a new tab), %StringOpens in a new tab (%Library.StringOpens in a new tab), and %NumericOpens in a new tab (%Library.NumericOpens in a new tab). %RegisteredObjectOpens in a new tab is a key class in InterSystems IRIS, because it defines the object interface. It provides the methods you use to create and work with object instances. %StringOpens in a new tab and %NumericOpens in a new tab are data type classes. As a consequence, the corresponding properties hold literal values (rather than other kinds of values).

- The full class name (also called the fully qualified class name) is Demo.MyExample.MyClass and the short class name is MyClass.
- Demo and MyExample are both package names. The package MyExample belongs to or is contained in the package Demo. MyExample is a short package name, and Demo.MyExample is the fully qualified name of this package.
- This class extends the class %RegisteredObjectOpens in a new tab. Equivalently, this class inherits from %RegisteredObjectOpens in a new tab. %RegisteredObjectOpens in a new tab is the superclass of this class, or this class is a subclass of %RegisteredObjectOpens in a new tab. An InterSystems IRIS class can have multiple superclasses.The superclass(es) of a class determine how the class can be used.
- This class defines two properties: Property1 and Property2. Property Property1 is of type %StringOpens in a new tab, and Property Property2 is of type %NumericOpens in a new tab.
- This class defines one method: MyMethod(), which returns a value of type %StringOpens in a new tab.
Kinds of Classes InterSystems IRIS provides a large set of class definitions that your classes can use in the following general ways: The most common choices for superclasses are as follows: The most common choices for values of properties, values of arguments to methods, values returned by methods, and so on are as follows: Object Classes The phrase object class refers to any subclass of %RegisteredObjectOpens in a new tab. With an object class, you can create an instance of the class, specify properties of the instance, and invoke methods of the instance. The generic term object refers to an instance of an object class.There are three general categories of object classes: The following figure shows the inheritance relationship among these three classes. The boxes list some of the methods defined in the classes:Collection classes and stream classes are object classes with specialized behavior. Data Type Classes The phrase data type class refers to any class whose ClassType keyword equals datatype or any subclass of such a class. These classes are not object classes (a data type class cannot define properties, and you cannot create an instance of the class). The purpose of a data type class (more accurately a data type generator class) is to be used as the type of a property of an object class.

- You can use classes as superclasses for your classes.
- You can use classes as values of properties, values of arguments to methods, values returned by methods, and so on.
- Some classes simply provide specific APIs. You typically do not use these classes in either of the preceding ways. Instead you write code that calls methods of the API.

- %RegisteredObjectOpens in a new tab — This class represents the object interface in its most generic form.
- %PersistentOpens in a new tab — This class represents a persistent object. In addition to providing the object interface, this class provides methods for saving objects to the database and reading objects from the database.
- %SerialObjectOpens in a new tab — This class represents an object that can be embedded in (serialized within) another object.
- Subclasses of any of the preceding classes.
- None — It is not necessary to specify a superclass when you create a class.

- Object classes (the classes contained in the previous list)
- Data type classes used for literal properties
- Collection classes
- Stream classes

- Transient object classes or registered object classes are subclasses of %RegisteredObjectOpens in a new tab but not of %PersistentOpens in a new tab or %SerialObjectOpens in a new tab (see the following bullets). For details, see Working with Registered Objects.
- Persistent classes are subclasses of %PersistentOpens in a new tab, which is a direct subclass of %RegisteredObjectOpens in a new tab. The %PersistentOpens in a new tab class includes the behavior of %RegisteredObjectOpens in a new tab and adds the ability to save objects to disk, reopen them, and so on.For details, see Introduction to Persistent Objects.
- Serial classes are subclasses of %SerialObjectOpens in a new tab, which is a direct subclass of %RegisteredObjectOpens in a new tab. The %SerialObjectOpens in a new tab class includes the behavior of %RegisteredObjectOpens in a new tab and adds the ability to create a string that represents the state of the object, for inclusion as a property within another object (usually either a transient object or a persistent object). The phrase serializing an object refers to the creation of this string. For details, see Defining and Using Object-Valued Properties.
Kinds of Class Members An InterSystems IRIS class definition can include the following items, all known as class members: The language used to define the various class members (not including any ObjectScript, Python, SQL or other code used to implement the members) is sometimes referred to as the Class Definition Language (CDL).

- Parameters — A parameter defines a constant value for use by this class. The value is set at compilation time, in most cases.
- Methods — InterSystems IRIS supports two types of methods: instance methods and class methods. An instance method is invoked from a specific instance of a class and performs some action related to that instance; this type of method is useful only in object classes. A class method is a method that can be invoked whether or not an instance of its class is in memory; this type of method is called a static method in other languages.
- Properties — A property contains data for an instance of the class. Properties are useful only in object classes. The following section provides more information.
- Class queries — A class query defines an SQL query that can be used by the class and specifies a class to use as a container for the query. Often (but not necessarily), you define class queries in a persistent class, to perform queries on the stored data for that class. You can, however, define class queries in any class.
- Other kinds of class members that are relevant only for persistent classes:

Storage definitions

Indices

Foreign keys

SQL triggers
- Storage definitions
- Indices
- Foreign keys
- SQL triggers
- XData blocks — An XData block is a named unit of data defined within the class, typically for use by a method in the class. These have many possible applications.
- Projections — A class projection provides a way to extend the behavior of the class compiler. The projection mechanism is used by the Java projections; hence the origin of the term projection.

- Storage definitions
- Indices
- Foreign keys
- SQL triggers
Kinds of Properties Formally, there are two kinds of properties: attributes and relationships.Attributes hold values. Attribute properties are usually referred to simply as properties. Depending on the property definition, the value that it holds can be any of the following: Relationships hold associations between objects. Relationship properties are referred to as relationships. Relationships are supported only in persistent classes. See Defining and Using Relationships.

- A literal value such as "MyString" and 1. Properties that hold literal values are based on data type classes and are also called data type properties. See Defining and Using Literal Properties.
- A stream. A stream is an object that contains a value that would be too long for a string. See Working with Streams.
- A collection. InterSystems IRIS provides the ability to define a property as either a list or an array. The list or array items can be literal values or can be objects. See Working with Collections.
- Some other kind of object. See Defining and Using Object-Valued Properties.
Defining a Class: The Basics This section discusses basic class definitions in more detail. It discusses the following topics: Typically, you use an Integrated Development Environment (IDE) to define classes. You can also define classes programmatically using the class definition classes or via an XML class definition file. If you define an SQL table using SQL DDL statements, the system creates a corresponding class definition. Choosing a Superclass When you define a class, one of your earliest design decisions is choosing the class (or classes) which to base your class. If there is only a single superclass, include Extends followed by the superclass name, at the start of the class definition. If there are multiple superclasses, specify them as a comma-separated list, enclosed in parentheses. It is not necessary to specify a superclass when you create a class. It is common to use %RegisteredObjectOpens in a new tab as the superclass even if the class does not represent any kind of object, because doing so gives your class access to many commonly used macros, but you can instead directly include the include files that contain them. Include Files You can create your own include files and include them in class definitions as needed. To include an include file at the beginning of a class definition, use syntax of the following form. Note that you must omit the .inc extension of the include file: For example: To include multiple include files at the beginning of a class definition, use syntax of the following form: Include files are inherited. That is, a subclass has access to all the same include files as its superclasses.Note that this syntax does not have a leading pound sign (in contrast to the syntax required in a routine). Also, the Include directive is not case-sensitive, so you could use INCLUDE instead, for example. The include file name is case-sensitive.See also #include. Specifying Class Keywords In some cases, it is necessary to control details of the code generated by the class compiler. For one example, for a persistent class, you can specify an SQL table name, if you do not want to (or cannot) use the default table name. For another example, you can mark a class as final, so that subclasses of it cannot be created. The class definitions support a specific set of keywords for such purposes. If you need to specify class keywords, include them within square brackets after the superclass, as follows: For example, the available class keywords include Abstract and Final. For an introduction, see Compiler Keywords. InterSystems IRIS also provides specific keywords for each kind of class member. Introduction to Defining Class Parameters A class parameter defines a constant value for all objects of a given class. To add a class parameter to a class definition, add an element like one of the following to the class: Keywords represents any parameter keywords. For an introduction to keywords, see Compiler Keywords. For parameter keywords; see Parameter Keywords. These are optional. Introduction to Defining Properties An object class can include properties.To add a property to a class definition, add an element like one of the following to the class: PropName is the name of the property, and Classname is an optional class name (if you omit this, the property is assumed to be of type %StringOpens in a new tab). Keywords represents any property keywords. For an introduction to keywords, see Compiler Keywords. For property keywords; see Property Keywords. These are optional. Depending on the class used by the property, you might also be able to specify property parameters, as shown in the third and fourth variations.Notice that the property parameters, if included, are enclosed in parentheses and precede any property keywords. Also notice that the property keywords, if included, are enclosed in square brackets. Introduction to Defining Methods You can define two kinds of methods in InterSystems IRIS classes: class methods and instance methods. To add a class method to a class definition, add an element like the following to the class: MethodName is the name of the method and arguments is a comma-separated list of arguments. Classname is an optional class name that represents the type of value (if any) returned by this method. Omit the As Classname part if the method does not return a value. Keywords represents any method keywords. For an introduction to keywords, see Compiler Keywords. For method keywords, see Method Keywords in the Class Definition Reference. These are optional. To add an instance method, use the same syntax with Method instead of ClassMethod: Instance methods are relevant only in object classes.

- Choosing a superclass
- Specifying class keywords
- Include files
- Introduction to defining class parameters
- Introduction to defining properties
- Introduction to defining methods
Naming Conventions Class and class members follow naming conventions, described briefly here.For complete information, see Rules and Guidelines for Identifiers and What Is Accessible in Your Namespaces. General Rules Every identifier must be unique within its context (for example, no two classes in a given namespace can have the same full name). Identifiers preserve case: you must exactly match the case of a name; at the same time, two classes cannot have names that differ only in case. For example, the identifiers id1 and ID1 are considered identical for purposes of uniqueness. Class Names A full class name consists of two parts: a package name and a class name: the class name follows the final . character in the name. A class name must be unique within its package; a package name must be unique within an InterSystems IRIS namespace. A full class name (that is, starting with the package name) must start with either a letter or the % character. Note that any class whose package name starts with a % character is available in all namespaces. Because persistent classes are automatically projected as SQL tables, a class definition must specify a table name that is not an SQL reserved word; if the name of a persistent class is an SQL reserved word, then the class definition must also specify a valid, non-reserved word value for its SQLTableName keyword.For details on packages, see Packages. Class Member Names Every class member (such as a property or method) must have a name that is unique within its class. InterSystems strongly recommends that you do not give two members the same name, even if they are different types of members; there could be unexpected results.Further, a member of a persistent class cannot use an SQL reserved word as its identifier. It can define an alias, however, using the SQLName or SQLFieldName keyword of that member (as appropriate).Member names can be delimited, which allows them to include characters that are otherwise not permitted. To create a delimited member name, use double quotes for the first and last characters of the name. For example:
Inheritance As with other class-based languages, you can combine multiple class definitions via inheritance. An InterSystems IRIS class definition can extend (or inherit from) multiple other classes. Those classes, in turn, can extend other classes.If one class inherits from another, the inheriting class is known as a subclass and the class or classes it is derived from are known as superclasses.Note that InterSystems IRIS classes cannot inherit from classes defined in Python (meaning a class definition contained in a .py file) and vice versa.The following shows an example class definition that uses two superclasses: In addition to a class inheriting methods from its superclasses, the properties inherit additional methods from system property behavior classes and, in the case of a data type attribute, from the data type class.For example, if there is a class defined called Person: It is simple to derive a new class, Employee, from it: This definition establishes the Employee class as a subclass of the Person class. In addition to its own class parameters, properties, and methods, the Employee class includes all of these elements from the Person class. Use of Subclasses You can use a subclass in any place in which you might use its superclass. For example, using the above defined Employee and Person classes, it is possible to open an Employee object and refer to it as a Person: We can also access Employee-specific attributes or methods: Primary Superclass The leftmost superclass that a subclass extends is known as its primary superclass. A class inherits all the members of its primary superclass, including applicable class keywords, properties, methods, queries, indexes, class parameters, and the parameters and keywords of the inherited properties and inherited methods. Except for items marked as Final, the subclass can override (but not delete) the characteristics of its inherited members. Important: Indexes (an option in persistent classes) are inherited only from the primary superclass. Multiple Inheritance A class can inherit its behavior and class type from more than one superclass. To establish multiple inheritance, list multiple superclasses within parentheses. The leftmost superclass is the primary superclass and specifies all the class keyword values.For example, if class X inherits from classes A, B, and C, its definition includes: The default inheritance order for the class compiler is from left to right, which means that differences in member definitions among superclasses are resolved in favor of the leftmost superclass (in this case, A superseding B and C, and B superseding C.)Specifically, for class X, the values of the class parameter values, properties, and methods are inherited from class A (the first superclass listed), then from class B, and, finally, from class C. X also inherits any class members from B that A has not defined, and any class members from C that neither A nor B has defined. If class B has a class member with the same name as a member already inherited from A, then X uses the value from A; similarly, if C has a member with the same name as one inherited from either A or B, the order of precedence is A, then B, then C.InterSystems recommends using left inheritance in all new programming, but you can specify the Inheritance keyword to override this. For reasons of history, most InterSystems IRIS classes contain Inheritance = right. Additional Topics Also see %ClassName() and the Most Specific Type Class (MSTC).
Introduction to Compiler Keywords As shown in Defining a Class: The Basics, you can include keywords in a class definition or in the definition of a class member. These keywords, also known as class attributes, generally affect the compiler. This section introduces some common keywords and discusses how InterSystems IRIS presents them. Example The following example shows a class definition with some commonly used keywords: This example shows the following keywords: PATTERN is not a keyword but instead is a property parameter; notice that PATTERN is enclosed in parentheses, rather than square brackets.Apart from keywords related to storage (which are not generally documented), you can find details on the keywords in the Class Definition Reference. The reference information demonstrates the syntax that applies when you view a class in the usual edit mode.

- For the class definition, the Extends keyword specifies the superclass (or superclasses) from which this class inherits.Note that the Extends keyword has a different name when you view the class in other ways; see Class Documentation.
- For the class definition, the SqlTableName keyword determines the name of the associated table, if the default name is not to be used. This keyword is meaningful only for persistent classes.
- For the index definition, the Unique keyword causes InterSystems IRIS to enforce uniqueness on the property on which the index is based (SSN in this example).
- For the two properties, the Required keyword causes InterSystems IRIS to require non-null values for the properties.
See Also

- Macros and Include Files
- Compiling and Deploying Classes
- Creating Class Documentation
- Top Level Class Syntax and Keywords
- Working with Registered Objects
- Introduction to Persistent Objects

## Introduction to Terminology

The following shows a simple InterSystems IRIS class definition, with some typical elements:
Note the following points:
The full class name (also called the fully qualified class name) is Demo.MyExample.MyClass and the short class name is MyClass. Demo and MyExample are both package names. The package MyExample belongs to or is contained in the package Demo. MyExample is a short package name, and Demo.MyExample is the fully qualified name of this package. This class extends the class %RegisteredObjectOpens in a new tab. Equivalently, this class inherits from %RegisteredObjectOpens in a new tab. %RegisteredObjectOpens in a new tab is the superclass of this class, or this class is a subclass of %RegisteredObjectOpens in a new tab. An InterSystems IRIS class can have multiple superclasses.The superclass(es) of a class determine how the class can be used. This class defines two properties: Property1 and Property2. Property Property1 is of type %StringOpens in a new tab, and Property Property2 is of type %NumericOpens in a new tab. This class defines one method: MyMethod(), which returns a value of type %StringOpens in a new tab.
This class refers to several system classes provided by InterSystems IRIS. These classes are %RegisteredObjectOpens in a new tab (whose full name is %Library.RegisteredObjectOpens in a new tab), %StringOpens in a new tab (%Library.StringOpens in a new tab), and %NumericOpens in a new tab (%Library.NumericOpens in a new tab). %RegisteredObjectOpens in a new tab is a key class in InterSystems IRIS, because it defines the object interface. It provides the methods you use to create and work with object instances. %StringOpens in a new tab and %NumericOpens in a new tab are data type classes. As a consequence, the corresponding properties hold literal values (rather than other kinds of values).

## Kinds of Classes

InterSystems IRIS provides a large set of class definitions that your classes can use in the following general ways:
You can use classes as superclasses for your classes. You can use classes as values of properties, values of arguments to methods, values returned by methods, and so on. Some classes simply provide specific APIs. You typically do not use these classes in either of the preceding ways. Instead you write code that calls methods of the API.
The most common choices for superclasses are as follows:
%RegisteredObjectOpens in a new tab — This class represents the object interface in its most generic form. %PersistentOpens in a new tab — This class represents a persistent object. In addition to providing the object interface, this class provides methods for saving objects to the database and reading objects from the database. %SerialObjectOpens in a new tab — This class represents an object that can be embedded in (serialized within) another object. Subclasses of any of the preceding classes. None — It is not necessary to specify a superclass when you create a class.
The most common choices for values of properties, values of arguments to methods, values returned by methods, and so on are as follows:
Object classes (the classes contained in the previous list) Data type classes used for literal properties Collection classes Stream classes
Object Classes The phrase object class refers to any subclass of %RegisteredObjectOpens in a new tab. With an object class, you can create an instance of the class, specify properties of the instance, and invoke methods of the instance. The generic term object refers to an instance of an object class.There are three general categories of object classes: The following figure shows the inheritance relationship among these three classes. The boxes list some of the methods defined in the classes:Collection classes and stream classes are object classes with specialized behavior.

- Transient object classes or registered object classes are subclasses of %RegisteredObjectOpens in a new tab but not of %PersistentOpens in a new tab or %SerialObjectOpens in a new tab (see the following bullets). For details, see Working with Registered Objects.
- Persistent classes are subclasses of %PersistentOpens in a new tab, which is a direct subclass of %RegisteredObjectOpens in a new tab. The %PersistentOpens in a new tab class includes the behavior of %RegisteredObjectOpens in a new tab and adds the ability to save objects to disk, reopen them, and so on.For details, see Introduction to Persistent Objects.
- Serial classes are subclasses of %SerialObjectOpens in a new tab, which is a direct subclass of %RegisteredObjectOpens in a new tab. The %SerialObjectOpens in a new tab class includes the behavior of %RegisteredObjectOpens in a new tab and adds the ability to create a string that represents the state of the object, for inclusion as a property within another object (usually either a transient object or a persistent object). The phrase serializing an object refers to the creation of this string. For details, see Defining and Using Object-Valued Properties.
Data Type Classes The phrase data type class refers to any class whose ClassType keyword equals datatype or any subclass of such a class. These classes are not object classes (a data type class cannot define properties, and you cannot create an instance of the class). The purpose of a data type class (more accurately a data type generator class) is to be used as the type of a property of an object class.

### Object Classes

The phrase object class refers to any subclass of %RegisteredObjectOpens in a new tab. With an object class, you can create an instance of the class, specify properties of the instance, and invoke methods of the instance. The generic term object refers to an instance of an object class.There are three general categories of object classes: The following figure shows the inheritance relationship among these three classes. The boxes list some of the methods defined in the classes:Collection classes and stream classes are object classes with specialized behavior.

- Transient object classes or registered object classes are subclasses of %RegisteredObjectOpens in a new tab but not of %PersistentOpens in a new tab or %SerialObjectOpens in a new tab (see the following bullets). For details, see Working with Registered Objects.
- Persistent classes are subclasses of %PersistentOpens in a new tab, which is a direct subclass of %RegisteredObjectOpens in a new tab. The %PersistentOpens in a new tab class includes the behavior of %RegisteredObjectOpens in a new tab and adds the ability to save objects to disk, reopen them, and so on.For details, see Introduction to Persistent Objects.
- Serial classes are subclasses of %SerialObjectOpens in a new tab, which is a direct subclass of %RegisteredObjectOpens in a new tab. The %SerialObjectOpens in a new tab class includes the behavior of %RegisteredObjectOpens in a new tab and adds the ability to create a string that represents the state of the object, for inclusion as a property within another object (usually either a transient object or a persistent object). The phrase serializing an object refers to the creation of this string. For details, see Defining and Using Object-Valued Properties.

### Data Type Classes

The phrase data type class refers to any class whose ClassType keyword equals datatype or any subclass of such a class. These classes are not object classes (a data type class cannot define properties, and you cannot create an instance of the class). The purpose of a data type class (more accurately a data type generator class) is to be used as the type of a property of an object class.

## Kinds of Class Members

An InterSystems IRIS class definition can include the following items, all known as class members:
Parameters — A parameter defines a constant value for use by this class. The value is set at compilation time, in most cases. Methods — InterSystems IRIS supports two types of methods: instance methods and class methods. An instance method is invoked from a specific instance of a class and performs some action related to that instance; this type of method is useful only in object classes. A class method is a method that can be invoked whether or not an instance of its class is in memory; this type of method is called a static method in other languages. Properties — A property contains data for an instance of the class. Properties are useful only in object classes. The following section provides more information. Class queries — A class query defines an SQL query that can be used by the class and specifies a class to use as a container for the query. Often (but not necessarily), you define class queries in a persistent class, to perform queries on the stored data for that class. You can, however, define class queries in any class. Other kinds of class members that are relevant only for persistent classes: XData blocks — An XData block is a named unit of data defined within the class, typically for use by a method in the class. These have many possible applications. Projections — A class projection provides a way to extend the behavior of the class compiler. The projection mechanism is used by the Java projections; hence the origin of the term projection.

- Storage definitions
- Indices
- Foreign keys
- SQL triggers
The language used to define the various class members (not including any ObjectScript, Python, SQL or other code used to implement the members) is sometimes referred to as the Class Definition Language (CDL).

## Kinds of Properties

Formally, there are two kinds of properties: attributes and relationships.
Attributes hold values. Attribute properties are usually referred to simply as properties. Depending on the property definition, the value that it holds can be any of the following:
A literal value such as "MyString" and 1. Properties that hold literal values are based on data type classes and are also called data type properties. See Defining and Using Literal Properties. A stream. A stream is an object that contains a value that would be too long for a string. See Working with Streams. A collection. InterSystems IRIS provides the ability to define a property as either a list or an array. The list or array items can be literal values or can be objects. See Working with Collections. Some other kind of object. See Defining and Using Object-Valued Properties.
Relationships hold associations between objects. Relationship properties are referred to as relationships. Relationships are supported only in persistent classes. See Defining and Using Relationships.

## Defining a Class: The Basics

This section discusses basic class definitions in more detail. It discusses the following topics:
Choosing a superclass Specifying class keywords Include files Introduction to defining class parameters Introduction to defining properties Introduction to defining methods
Typically, you use an Integrated Development Environment (IDE) to define classes. You can also define classes programmatically using the class definition classes or via an XML class definition file. If you define an SQL table using SQL DDL statements, the system creates a corresponding class definition.
Choosing a Superclass When you define a class, one of your earliest design decisions is choosing the class (or classes) which to base your class. If there is only a single superclass, include Extends followed by the superclass name, at the start of the class definition. If there are multiple superclasses, specify them as a comma-separated list, enclosed in parentheses. It is not necessary to specify a superclass when you create a class. It is common to use %RegisteredObjectOpens in a new tab as the superclass even if the class does not represent any kind of object, because doing so gives your class access to many commonly used macros, but you can instead directly include the include files that contain them.
Include Files You can create your own include files and include them in class definitions as needed. To include an include file at the beginning of a class definition, use syntax of the following form. Note that you must omit the .inc extension of the include file: For example: To include multiple include files at the beginning of a class definition, use syntax of the following form: Include files are inherited. That is, a subclass has access to all the same include files as its superclasses.Note that this syntax does not have a leading pound sign (in contrast to the syntax required in a routine). Also, the Include directive is not case-sensitive, so you could use INCLUDE instead, for example. The include file name is case-sensitive.See also #include.
Specifying Class Keywords In some cases, it is necessary to control details of the code generated by the class compiler. For one example, for a persistent class, you can specify an SQL table name, if you do not want to (or cannot) use the default table name. For another example, you can mark a class as final, so that subclasses of it cannot be created. The class definitions support a specific set of keywords for such purposes. If you need to specify class keywords, include them within square brackets after the superclass, as follows: For example, the available class keywords include Abstract and Final. For an introduction, see Compiler Keywords. InterSystems IRIS also provides specific keywords for each kind of class member.
Introduction to Defining Class Parameters A class parameter defines a constant value for all objects of a given class. To add a class parameter to a class definition, add an element like one of the following to the class: Keywords represents any parameter keywords. For an introduction to keywords, see Compiler Keywords. For parameter keywords; see Parameter Keywords. These are optional.
Introduction to Defining Properties An object class can include properties.To add a property to a class definition, add an element like one of the following to the class: PropName is the name of the property, and Classname is an optional class name (if you omit this, the property is assumed to be of type %StringOpens in a new tab). Keywords represents any property keywords. For an introduction to keywords, see Compiler Keywords. For property keywords; see Property Keywords. These are optional. Depending on the class used by the property, you might also be able to specify property parameters, as shown in the third and fourth variations.Notice that the property parameters, if included, are enclosed in parentheses and precede any property keywords. Also notice that the property keywords, if included, are enclosed in square brackets.
Introduction to Defining Methods You can define two kinds of methods in InterSystems IRIS classes: class methods and instance methods. To add a class method to a class definition, add an element like the following to the class: MethodName is the name of the method and arguments is a comma-separated list of arguments. Classname is an optional class name that represents the type of value (if any) returned by this method. Omit the As Classname part if the method does not return a value. Keywords represents any method keywords. For an introduction to keywords, see Compiler Keywords. For method keywords, see Method Keywords in the Class Definition Reference. These are optional. To add an instance method, use the same syntax with Method instead of ClassMethod: Instance methods are relevant only in object classes.

### Choosing a Superclass

When you define a class, one of your earliest design decisions is choosing the class (or classes) which to base your class. If there is only a single superclass, include Extends followed by the superclass name, at the start of the class definition. If there are multiple superclasses, specify them as a comma-separated list, enclosed in parentheses. It is not necessary to specify a superclass when you create a class. It is common to use %RegisteredObjectOpens in a new tab as the superclass even if the class does not represent any kind of object, because doing so gives your class access to many commonly used macros, but you can instead directly include the include files that contain them.

### Include Files

You can create your own include files and include them in class definitions as needed. To include an include file at the beginning of a class definition, use syntax of the following form. Note that you must omit the .inc extension of the include file: For example: To include multiple include files at the beginning of a class definition, use syntax of the following form: Include files are inherited. That is, a subclass has access to all the same include files as its superclasses.Note that this syntax does not have a leading pound sign (in contrast to the syntax required in a routine). Also, the Include directive is not case-sensitive, so you could use INCLUDE instead, for example. The include file name is case-sensitive.See also #include.

### Specifying Class Keywords

In some cases, it is necessary to control details of the code generated by the class compiler. For one example, for a persistent class, you can specify an SQL table name, if you do not want to (or cannot) use the default table name. For another example, you can mark a class as final, so that subclasses of it cannot be created. The class definitions support a specific set of keywords for such purposes. If you need to specify class keywords, include them within square brackets after the superclass, as follows: For example, the available class keywords include Abstract and Final. For an introduction, see Compiler Keywords. InterSystems IRIS also provides specific keywords for each kind of class member.

### Introduction to Defining Class Parameters

A class parameter defines a constant value for all objects of a given class. To add a class parameter to a class definition, add an element like one of the following to the class: Keywords represents any parameter keywords. For an introduction to keywords, see Compiler Keywords. For parameter keywords; see Parameter Keywords. These are optional.

### Introduction to Defining Properties

An object class can include properties.To add a property to a class definition, add an element like one of the following to the class: PropName is the name of the property, and Classname is an optional class name (if you omit this, the property is assumed to be of type %StringOpens in a new tab). Keywords represents any property keywords. For an introduction to keywords, see Compiler Keywords. For property keywords; see Property Keywords. These are optional. Depending on the class used by the property, you might also be able to specify property parameters, as shown in the third and fourth variations.Notice that the property parameters, if included, are enclosed in parentheses and precede any property keywords. Also notice that the property keywords, if included, are enclosed in square brackets.

### Introduction to Defining Methods

You can define two kinds of methods in InterSystems IRIS classes: class methods and instance methods. To add a class method to a class definition, add an element like the following to the class: MethodName is the name of the method and arguments is a comma-separated list of arguments. Classname is an optional class name that represents the type of value (if any) returned by this method. Omit the As Classname part if the method does not return a value. Keywords represents any method keywords. For an introduction to keywords, see Compiler Keywords. For method keywords, see Method Keywords in the Class Definition Reference. These are optional. To add an instance method, use the same syntax with Method instead of ClassMethod: Instance methods are relevant only in object classes.

## Naming Conventions

Class and class members follow naming conventions, described briefly here.
For complete information, see Rules and Guidelines for Identifiers and What Is Accessible in Your Namespaces.
General Rules Every identifier must be unique within its context (for example, no two classes in a given namespace can have the same full name). Identifiers preserve case: you must exactly match the case of a name; at the same time, two classes cannot have names that differ only in case. For example, the identifiers id1 and ID1 are considered identical for purposes of uniqueness.
Class Names A full class name consists of two parts: a package name and a class name: the class name follows the final . character in the name. A class name must be unique within its package; a package name must be unique within an InterSystems IRIS namespace. A full class name (that is, starting with the package name) must start with either a letter or the % character. Note that any class whose package name starts with a % character is available in all namespaces. Because persistent classes are automatically projected as SQL tables, a class definition must specify a table name that is not an SQL reserved word; if the name of a persistent class is an SQL reserved word, then the class definition must also specify a valid, non-reserved word value for its SQLTableName keyword.For details on packages, see Packages.
Class Member Names Every class member (such as a property or method) must have a name that is unique within its class. InterSystems strongly recommends that you do not give two members the same name, even if they are different types of members; there could be unexpected results.Further, a member of a persistent class cannot use an SQL reserved word as its identifier. It can define an alias, however, using the SQLName or SQLFieldName keyword of that member (as appropriate).Member names can be delimited, which allows them to include characters that are otherwise not permitted. To create a delimited member name, use double quotes for the first and last characters of the name. For example:

### General Rules

Every identifier must be unique within its context (for example, no two classes in a given namespace can have the same full name). Identifiers preserve case: you must exactly match the case of a name; at the same time, two classes cannot have names that differ only in case. For example, the identifiers id1 and ID1 are considered identical for purposes of uniqueness.

### Class Names

A full class name consists of two parts: a package name and a class name: the class name follows the final . character in the name. A class name must be unique within its package; a package name must be unique within an InterSystems IRIS namespace. A full class name (that is, starting with the package name) must start with either a letter or the % character. Note that any class whose package name starts with a % character is available in all namespaces. Because persistent classes are automatically projected as SQL tables, a class definition must specify a table name that is not an SQL reserved word; if the name of a persistent class is an SQL reserved word, then the class definition must also specify a valid, non-reserved word value for its SQLTableName keyword.For details on packages, see Packages.

### Class Member Names

Every class member (such as a property or method) must have a name that is unique within its class. InterSystems strongly recommends that you do not give two members the same name, even if they are different types of members; there could be unexpected results.Further, a member of a persistent class cannot use an SQL reserved word as its identifier. It can define an alias, however, using the SQLName or SQLFieldName keyword of that member (as appropriate).Member names can be delimited, which allows them to include characters that are otherwise not permitted. To create a delimited member name, use double quotes for the first and last characters of the name. For example:

## Inheritance

As with other class-based languages, you can combine multiple class definitions via inheritance. An InterSystems IRIS class definition can extend (or inherit from) multiple other classes. Those classes, in turn, can extend other classes.
If one class inherits from another, the inheriting class is known as a subclass and the class or classes it is derived from are known as superclasses.
Note that InterSystems IRIS classes cannot inherit from classes defined in Python (meaning a class definition contained in a .py file) and vice versa.
The following shows an example class definition that uses two superclasses:
In addition to a class inheriting methods from its superclasses, the properties inherit additional methods from system property behavior classes and, in the case of a data type attribute, from the data type class.
For example, if there is a class defined called Person:
It is simple to derive a new class, Employee, from it:
This definition establishes the Employee class as a subclass of the Person class. In addition to its own class parameters, properties, and methods, the Employee class includes all of these elements from the Person class.
Use of Subclasses You can use a subclass in any place in which you might use its superclass. For example, using the above defined Employee and Person classes, it is possible to open an Employee object and refer to it as a Person: We can also access Employee-specific attributes or methods:
Primary Superclass The leftmost superclass that a subclass extends is known as its primary superclass. A class inherits all the members of its primary superclass, including applicable class keywords, properties, methods, queries, indexes, class parameters, and the parameters and keywords of the inherited properties and inherited methods. Except for items marked as Final, the subclass can override (but not delete) the characteristics of its inherited members. Important: Indexes (an option in persistent classes) are inherited only from the primary superclass.
Multiple Inheritance A class can inherit its behavior and class type from more than one superclass. To establish multiple inheritance, list multiple superclasses within parentheses. The leftmost superclass is the primary superclass and specifies all the class keyword values.For example, if class X inherits from classes A, B, and C, its definition includes: The default inheritance order for the class compiler is from left to right, which means that differences in member definitions among superclasses are resolved in favor of the leftmost superclass (in this case, A superseding B and C, and B superseding C.)Specifically, for class X, the values of the class parameter values, properties, and methods are inherited from class A (the first superclass listed), then from class B, and, finally, from class C. X also inherits any class members from B that A has not defined, and any class members from C that neither A nor B has defined. If class B has a class member with the same name as a member already inherited from A, then X uses the value from A; similarly, if C has a member with the same name as one inherited from either A or B, the order of precedence is A, then B, then C.InterSystems recommends using left inheritance in all new programming, but you can specify the Inheritance keyword to override this. For reasons of history, most InterSystems IRIS classes contain Inheritance = right.
Additional Topics Also see %ClassName() and the Most Specific Type Class (MSTC).

### Use of Subclasses

You can use a subclass in any place in which you might use its superclass. For example, using the above defined Employee and Person classes, it is possible to open an Employee object and refer to it as a Person: We can also access Employee-specific attributes or methods:

### Primary Superclass

The leftmost superclass that a subclass extends is known as its primary superclass. A class inherits all the members of its primary superclass, including applicable class keywords, properties, methods, queries, indexes, class parameters, and the parameters and keywords of the inherited properties and inherited methods. Except for items marked as Final, the subclass can override (but not delete) the characteristics of its inherited members. Important: Indexes (an option in persistent classes) are inherited only from the primary superclass.

### Multiple Inheritance

A class can inherit its behavior and class type from more than one superclass. To establish multiple inheritance, list multiple superclasses within parentheses. The leftmost superclass is the primary superclass and specifies all the class keyword values.For example, if class X inherits from classes A, B, and C, its definition includes: The default inheritance order for the class compiler is from left to right, which means that differences in member definitions among superclasses are resolved in favor of the leftmost superclass (in this case, A superseding B and C, and B superseding C.)Specifically, for class X, the values of the class parameter values, properties, and methods are inherited from class A (the first superclass listed), then from class B, and, finally, from class C. X also inherits any class members from B that A has not defined, and any class members from C that neither A nor B has defined. If class B has a class member with the same name as a member already inherited from A, then X uses the value from A; similarly, if C has a member with the same name as one inherited from either A or B, the order of precedence is A, then B, then C.InterSystems recommends using left inheritance in all new programming, but you can specify the Inheritance keyword to override this. For reasons of history, most InterSystems IRIS classes contain Inheritance = right.

### Additional Topics

Also see %ClassName() and the Most Specific Type Class (MSTC).

## Introduction to Compiler Keywords

As shown in Defining a Class: The Basics, you can include keywords in a class definition or in the definition of a class member. These keywords, also known as class attributes, generally affect the compiler. This section introduces some common keywords and discusses how InterSystems IRIS presents them.
Example The following example shows a class definition with some commonly used keywords: This example shows the following keywords: PATTERN is not a keyword but instead is a property parameter; notice that PATTERN is enclosed in parentheses, rather than square brackets.Apart from keywords related to storage (which are not generally documented), you can find details on the keywords in the Class Definition Reference. The reference information demonstrates the syntax that applies when you view a class in the usual edit mode.

- For the class definition, the Extends keyword specifies the superclass (or superclasses) from which this class inherits.Note that the Extends keyword has a different name when you view the class in other ways; see Class Documentation.
- For the class definition, the SqlTableName keyword determines the name of the associated table, if the default name is not to be used. This keyword is meaningful only for persistent classes.
- For the index definition, the Unique keyword causes InterSystems IRIS to enforce uniqueness on the property on which the index is based (SSN in this example).
- For the two properties, the Required keyword causes InterSystems IRIS to require non-null values for the properties.

### Example

The following example shows a class definition with some commonly used keywords: This example shows the following keywords: PATTERN is not a keyword but instead is a property parameter; notice that PATTERN is enclosed in parentheses, rather than square brackets.Apart from keywords related to storage (which are not generally documented), you can find details on the keywords in the Class Definition Reference. The reference information demonstrates the syntax that applies when you view a class in the usual edit mode.

- For the class definition, the Extends keyword specifies the superclass (or superclasses) from which this class inherits.Note that the Extends keyword has a different name when you view the class in other ways; see Class Documentation.
- For the class definition, the SqlTableName keyword determines the name of the associated table, if the default name is not to be used. This keyword is meaningful only for persistent classes.
- For the index definition, the Unique keyword causes InterSystems IRIS to enforce uniqueness on the property on which the index is based (SSN in this example).
- For the two properties, the Required keyword causes InterSystems IRIS to require non-null values for the properties.

## See Also

Macros and Include Files Compiling and Deploying Classes Creating Class Documentation Top Level Class Syntax and Keywords Working with Registered Objects Introduction to Persistent Objects

## Ejemplos de código

```objectscript
Class Demo.MyExample.MyClass Extends %RegisteredObject
{

Property Property1 As %String;

Property Property2 As %Numeric;

Method MyMethod() As %String
{
   set returnvalue=..Property1_..Property2
   quit returnvalue
}

}
```

```objectscript
Class Demo.MyExample.MyClass Extends %RegisteredObject
{

Property Property1 As %String;

Property Property2 As %Numeric;

Method MyMethod() As %String
{
   set returnvalue=..Property1_..Property2
   quit returnvalue
}

}
```

```objectscript
Class Demo.MyClass Extends Superclass 
{

//...

}
```

```objectscript
Class Demo.MyClass Extends Superclass 
{

//...

}
```

```objectscript
Class Demo.MyClass Extends (Superclass1, Superclass2, Superclass3) 
{

//...

}
```

```objectscript
Class Demo.MyClass Extends (Superclass1, Superclass2, Superclass3) 
{

//...

}
```

```objectscript
Include MyMacros
```

```objectscript
Include MyMacros
```

```objectscript
Include %occInclude

Class Classname 
{
}
```

```objectscript
Include %occInclude

Class Classname 
{
}
```

```objectscript
Include (MyMacros, YourMacros)
```

```objectscript
Include (MyMacros, YourMacros)
```

```objectscript
Class Demo.MyClass Extends Demo.MySuperclass [ Keyword1, Keyword2, ...]
{

//...

}
```

```objectscript
Class Demo.MyClass Extends Demo.MySuperclass [ Keyword1, Keyword2, ...]
{

//...

}
```

```objectscript
Parameter PARAMNAME as Type;
```

```objectscript
Parameter PARAMNAME as Type;
```

```objectscript
Parameter PARAMNAME as Type = value;
```

```objectscript
Parameter PARAMNAME as Type = value;
```

```objectscript
Parameter PARAMNAME as Type [ Keywords ] = value;
```

```objectscript
Parameter PARAMNAME as Type [ Keywords ] = value;
```

```objectscript
Property PropName as Classname;
```

```objectscript
Property PropName as Classname;
```

```objectscript
Property PropName as Classname [ Keywords ] ;
```

```objectscript
Property PropName as Classname [ Keywords ] ;
```

```objectscript
Property PropName as Classname(PARAM1=value,PARAM2=value) [ Keywords ] ;
```

```objectscript
Property PropName as Classname(PARAM1=value,PARAM2=value) [ Keywords ] ;
```

```objectscript
Property PropName as Classname(PARAM1=value,PARAM2=value) ;
```

```objectscript
Property PropName as Classname(PARAM1=value,PARAM2=value) ;
```

```objectscript
ClassMethod MethodName(arguments) as Classname [ Keywords]
{
//method implementation
}
```

```objectscript
ClassMethod MethodName(arguments) as Classname [ Keywords]
{
//method implementation
}
```

```objectscript
Method MethodName(arguments) as Classname [ Keywords]
{
//method implementation
}
```

```objectscript
Method MethodName(arguments) as Classname [ Keywords]
{
//method implementation
}
```

```objectscript
Property "My Property" As %String;
```

```objectscript
Property "My Property" As %String;
```

```objectscript
Class User.MySubclass Extends (%Library.Persistent, %Library.Populate)
{
}
```

```objectscript
Class User.MySubclass Extends (%Library.Persistent, %Library.Populate)
{
}
```

```objectscript
Class MyApp.Person Extends %Library.Persistent
{
Property Name As %String;
Property DOB As %Date;
}
```

```objectscript
Class MyApp.Person Extends %Library.Persistent
{
Property Name As %String;
Property DOB As %Date;
}
```

```objectscript
Class MyApp.Employee Extends Person
{
Property Salary As %Integer;
Property Department As %String;
}
```

```objectscript
Class MyApp.Employee Extends Person
{
Property Salary As %Integer;
Property Department As %String;
}
```

```objectscript
Set x = ##class(MyApp.Person).%OpenId(id)
 Write x.Name
```

```objectscript
Set x = ##class(MyApp.Person).%OpenId(id)
 Write x.Name
```

```objectscript
Write x.Salary // displays the Salary property (only available in Employee instances)
```

```objectscript
Write x.Salary // displays the Salary property (only available in Employee instances)
```

```objectscript
Class X Extends (A, B, C) 
{
}
```

```objectscript
Class X Extends (A, B, C) 
{
}
```

```objectscript
/// This sample persistent class represents a person.
Class MyApp.Person Extends %Persistent [ SqlTableName = MyAppPerson ]
{

/// Define a unique index for the SSN property.
Index SSNKey On SSN [ Unique ];

/// Name of the person.
Property Name As %String [ Required ];

/// Person's Social Security number.
Property SSN As %String(PATTERN = "3N1""-""2N1""-""4N") [ Required ];

}
```

```objectscript
/// This sample persistent class represents a person.
Class MyApp.Person Extends %Persistent [ SqlTableName = MyAppPerson ]
{

/// Define a unique index for the SSN property.
Index SSNKey On SSN [ Unique ];

/// Name of the person.
Property Name As %String [ Required ];

/// Person's Social Security number.
Property SSN As %String(PATTERN = "3N1""-""2N1""-""4N") [ Required ];

}
```
