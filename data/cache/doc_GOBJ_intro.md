> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GOBJ_intro

# Basic Ideas in Class Programming | Defining and Using Classes | InterSystems IRIS Data Platform 2025.2

### Is this page helpful?

Please select a reason: Submit Cancel

Please select a reason: Submit Cancel

#### Please select a reason:

Easy to understand Well organized Found what I was looking for Enjoying the new design! Other
Submit Cancel

#### Please select a reason:

Hard to understand Content displayed poorly Didn't find what I needed I prefer the old design better Other
Submit Cancel

# Basic Ideas in Class Programming

Contents

- Objects & Properties
- Methods
- Class Constants (Parameters)
- Types
- Inheritance
- Classes as Containers of Methods
- Abstract Classes
- See Also
If you are not familiar with class programming, this topic is intended to give you a sense of how this kind of programming works. If you are familiar with class programming, you might find it helpful just to skim the code examples, so that you see what class programming in InterSystems IRIS® data platform looks like.
The concepts discussed here are largely independent of language, although the examples use ObjectScript.
Objects and Properties In class programming, a key concept is objects. An object is a container for a set of values that are stored together or passed together as a set. An object often corresponds to a real-life entity, such as a patient, a patient diagnosis, a transaction, and so on. A class definition is often a template for objects of a given type. The class definition has properties to contain the values for those objects. For example, suppose that we have a class named MyApp.Clinical.PatDiagnosis; this class could have the properties Date, EnteredBy, PatientID, DiagnosedBy, Code, and others.You use the template by creating instances of the class; these instances are objects. For example, suppose that a user enters a patient diagnosis into a user interface and saves that data. The underlying code would have the following logic: The following shows an example that uses ObjectScript: Note the following points:

1. Create a new patient diagnosis object from the patient diagnosis template.
2. Set values for the properties of the object, as needed. Some may be required, some may have default values, some may be calculated based on others, and some may be purely optional.
3. Save the object.This action stores the data.

- To refer to a property of the object, you use the syntax object_variable.property_name, for example: diagnosis.DiagnosedBy
- %New() and %Save() are methods of the MyApp.Clinical.PatDiagnosis class.The next section discusses types of methods and why you invoke them in different ways as seen here.
Methods A method is a procedure (in most cases; also see Variable Availability and Scope). Methods can invoke each other and can refer to properties and parameters. There are two kinds of methods in a class: instance methods and class methods. These have different purposes and are used in different ways. Instance Methods An instance method has meaning only when invoked from an instance of the class, usually because you are doing something to or something with that instance. For example: For example, suppose that we are defining a class that represents patients. In this class, we could define instance methods to perform the following actions: Each of these actions requires knowledge of data stored for the patient, which is why most programmers would write them as instance methods. Internally, the implementation of an instance method typically refers to properties of that instance. The following shows an example definition of an instance method that refers to two properties: To use this method, your application code might include lines like this: Class Methods The other type of method is the class method (called a static method in other languages). To invoke this type of method, you use syntax that does not refer to an instance. For example: There are three very general reasons to write class methods: Methods and Variable Scope A method typically sets values of variables. In nearly all cases, these variables are available only within this method. For example, consider the following class: The Add() method sets a variable named ans and then returns the value contained in that variable. The method Demo1() invokes the method Add(), with the arguments 1 and 2, and then writes the answer. The method Demo2() is similar but uses different hardcoded arguments.If the method Demo1() or Demo2() tried to refer to the variable ans, that variable would be undefined in that context and InterSystems IRIS would throw an error.Similarly, Add() cannot refer to the variable x. Also the variable x within Demo1() is a different variable from the variable x within Demo2().These variables have limited scope because that is the default behavior of InterSystems IRIS classes (and is the usual behavior in other class languages).Within class definitions, you pass values almost entirely by including them as arguments to methods. This is the convention in class programming. This convention simplifies the job of determining the scope of variables.In contrast, when you write routines, it is necessary to understand the rules that control scoping; see Variable Availability and Scope.

- Calculate the BMI (body mass index) for the patient
- Print a report summarizing information for the patient
- Determine whether the patient is eligible for a specific procedure

- You need to perform an action that creates an instance of the class.By definition, this action cannot be an instance method.
- You need to perform an action that affects multiple instances.For example, you might need to reassign a group of patients to a different primary care physician.
- You need to perform an action that does not affect any instance.For example, you can write a method that returns the time of day, or a random number, or a string formatted in a particular way.
Class Constants (Parameters) Sometimes it is useful for a class to have easy access to a constant value. In InterSystems IRIS classes, such a value is a class parameter. Other languages use the term class constant instead. The following shows an example: A class parameter acquires a value at compile time and cannot be changed later. Your methods can refer to parameters; that is why you define parameters. For example:
Class Definitions and Types The following shows an example of a class definition, which we will use to discuss types in class definitions: This class definition defines one parameter (MYPARAMETER), two properties (DateOfBirth and Home), one instance method (CurrentAge()), and one class method (Addition()). In class programming, you can specify types in the following key places:

- For the class itself. The element after Extends is a type. Each type is the name of class.
- For parameters. In this case and in the remaining cases, the element after As is a type.
- For properties. For the Home property, the type is a class that itself contains properties. In this case, the type has an object value. In the example here, this is an object-valued property.Object-valued properties can contain other object-valued properties.
- For the return value of a method.
- For the value of any arguments used by a method.
Inheritance In most class-based languages, a major feature is inheritance: one class can inherit from other classes and thus acquire the parameters, properties, methods, and other elements of those other classes. Collectively, the parameters, properties, methods, and other elements are known as class members. Terminology and Basics When class A inherits from class B, we use the following terminology: When a class inherits from other classes, it acquires the class members of those other classes, including members that the superclasses have themselves inherited. The subclass can override the inherited class members.It is possible for multiple superclasses of one class to define methods with the same name, properties with the same name, and so on. Therefore it is necessary to have rules for deciding which superclass contributes the definition that is used in the subclass. (See Inheritance.) In the InterSystems IRIS class library, superclasses usually have different purposes and have members with different names, and conflicts of member names are not common. Example The following shows an example: This example is presented solely to demonstrate how a class can combine logic from different superclasses. This EnsLib.File.InboundAdapterOpens in a new tab class inherits from two classes that do quite different things: In EnsLib.File.InboundAdapterOpens in a new tab, the methods use logic from both of these classes, as well as their superclasses. Use of Inherited Class Members When you see the definition of a class in an editing tool, you do not see the inherited members that it contains but your code can refer to them. For example, suppose that class A has two properties, each of which has a default value, as follows: Class B could look like this: As noted earlier, a subclass can override the inherited class members. For example, class C could also inherit from class A but could override the default value of one of its properties: Use of Subclasses If class B inherits from class A, you can use an instance of class B in any location where you can use an instance of class A.For example, suppose that you have a utility method like the following: You can use an instance of MyApp.Person as input to this method. You can also use an instance of any subclass of MyApp.Person. For example: Similarly, the return value of a method (if it returns a value) can be an instance of a subclass of the specified type. For example, suppose that MyApp.Employee and MyApp.Patient are both subclasses of MyApp.Person. You could define a method as follows:

- Class A is a subclass of class B. Alternatively, class A extends class B. Sometimes it is said that class A is a subtype of class B.
- Class B is a superclass of class A.Sometimes it is said that class A is the child class and class B is the parent class. This terminology is common but can be misleading, because the words parent and child are used in quite a different sense when discussing SQL tables.

- Ens.InboundAdapterOpens in a new tab, which contains the basic logic for something known as an inbound adapter, a concept in InterSystems IRIS.
- EnsLib.File.CommonOpens in a new tab, which contains logic for working with sets of files in a given directory.
Classes as Containers of Methods As noted earlier, a class definition is often a template for objects. Another possibility is for a class to be a container for a set of class methods that belong together. In this case, you never create an instance of this class. You only invoke class methods in it.For examples, see the classes in the %SYSTEM package.
Abstract Classes It is also useful to define abstract classes. An abstract class typically defines a generic interface and cannot be instantiated. A method definition within the class declares the signature of the method, but not its implementation. You define an abstract class to describe an interface. Then you or other developers create subclasses, and in those subclasses, implement the methods. The implementation must match the signature specified in the abstract class. This system enables you to develop multiple, parallel classes with slightly different purposes but identical interfaces. Many of the system classes have common interfaces for this reason.It is also possible to specify that a method is abstract even if the class is not.
See Also

- Defining Classes
- Creating Class Documentation

## Objects and Properties

In class programming, a key concept is objects. An object is a container for a set of values that are stored together or passed together as a set. An object often corresponds to a real-life entity, such as a patient, a patient diagnosis, a transaction, and so on.
A class definition is often a template for objects of a given type. The class definition has properties to contain the values for those objects. For example, suppose that we have a class named MyApp.Clinical.PatDiagnosis; this class could have the properties Date, EnteredBy, PatientID, DiagnosedBy, Code, and others.
You use the template by creating instances of the class; these instances are objects. For example, suppose that a user enters a patient diagnosis into a user interface and saves that data. The underlying code would have the following logic:
Create a new patient diagnosis object from the patient diagnosis template. Set values for the properties of the object, as needed. Some may be required, some may have default values, some may be calculated based on others, and some may be purely optional. Save the object.This action stores the data.
The following shows an example that uses ObjectScript:
Note the following points:
To refer to a property of the object, you use the syntax object_variable.property_name, for example: diagnosis.DiagnosedBy %New() and %Save() are methods of the MyApp.Clinical.PatDiagnosis class.The next section discusses types of methods and why you invoke them in different ways as seen here.

## Methods

A method is a procedure (in most cases; also see Variable Availability and Scope). Methods can invoke each other and can refer to properties and parameters.
There are two kinds of methods in a class: instance methods and class methods. These have different purposes and are used in different ways.
Instance Methods An instance method has meaning only when invoked from an instance of the class, usually because you are doing something to or something with that instance. For example: For example, suppose that we are defining a class that represents patients. In this class, we could define instance methods to perform the following actions: Each of these actions requires knowledge of data stored for the patient, which is why most programmers would write them as instance methods. Internally, the implementation of an instance method typically refers to properties of that instance. The following shows an example definition of an instance method that refers to two properties: To use this method, your application code might include lines like this:

- Calculate the BMI (body mass index) for the patient
- Print a report summarizing information for the patient
- Determine whether the patient is eligible for a specific procedure
Class Methods The other type of method is the class method (called a static method in other languages). To invoke this type of method, you use syntax that does not refer to an instance. For example: There are three very general reasons to write class methods:

- You need to perform an action that creates an instance of the class.By definition, this action cannot be an instance method.
- You need to perform an action that affects multiple instances.For example, you might need to reassign a group of patients to a different primary care physician.
- You need to perform an action that does not affect any instance.For example, you can write a method that returns the time of day, or a random number, or a string formatted in a particular way.
Methods and Variable Scope A method typically sets values of variables. In nearly all cases, these variables are available only within this method. For example, consider the following class: The Add() method sets a variable named ans and then returns the value contained in that variable. The method Demo1() invokes the method Add(), with the arguments 1 and 2, and then writes the answer. The method Demo2() is similar but uses different hardcoded arguments.If the method Demo1() or Demo2() tried to refer to the variable ans, that variable would be undefined in that context and InterSystems IRIS would throw an error.Similarly, Add() cannot refer to the variable x. Also the variable x within Demo1() is a different variable from the variable x within Demo2().These variables have limited scope because that is the default behavior of InterSystems IRIS classes (and is the usual behavior in other class languages).Within class definitions, you pass values almost entirely by including them as arguments to methods. This is the convention in class programming. This convention simplifies the job of determining the scope of variables.In contrast, when you write routines, it is necessary to understand the rules that control scoping; see Variable Availability and Scope.

### Instance Methods

An instance method has meaning only when invoked from an instance of the class, usually because you are doing something to or something with that instance. For example: For example, suppose that we are defining a class that represents patients. In this class, we could define instance methods to perform the following actions: Each of these actions requires knowledge of data stored for the patient, which is why most programmers would write them as instance methods. Internally, the implementation of an instance method typically refers to properties of that instance. The following shows an example definition of an instance method that refers to two properties: To use this method, your application code might include lines like this:

- Calculate the BMI (body mass index) for the patient
- Print a report summarizing information for the patient
- Determine whether the patient is eligible for a specific procedure

### Class Methods

The other type of method is the class method (called a static method in other languages). To invoke this type of method, you use syntax that does not refer to an instance. For example: There are three very general reasons to write class methods:

- You need to perform an action that creates an instance of the class.By definition, this action cannot be an instance method.
- You need to perform an action that affects multiple instances.For example, you might need to reassign a group of patients to a different primary care physician.
- You need to perform an action that does not affect any instance.For example, you can write a method that returns the time of day, or a random number, or a string formatted in a particular way.

### Methods and Variable Scope

A method typically sets values of variables. In nearly all cases, these variables are available only within this method. For example, consider the following class: The Add() method sets a variable named ans and then returns the value contained in that variable. The method Demo1() invokes the method Add(), with the arguments 1 and 2, and then writes the answer. The method Demo2() is similar but uses different hardcoded arguments.If the method Demo1() or Demo2() tried to refer to the variable ans, that variable would be undefined in that context and InterSystems IRIS would throw an error.Similarly, Add() cannot refer to the variable x. Also the variable x within Demo1() is a different variable from the variable x within Demo2().These variables have limited scope because that is the default behavior of InterSystems IRIS classes (and is the usual behavior in other class languages).Within class definitions, you pass values almost entirely by including them as arguments to methods. This is the convention in class programming. This convention simplifies the job of determining the scope of variables.In contrast, when you write routines, it is necessary to understand the rules that control scoping; see Variable Availability and Scope.

## Class Constants (Parameters)

Sometimes it is useful for a class to have easy access to a constant value. In InterSystems IRIS classes, such a value is a class parameter. Other languages use the term class constant instead. The following shows an example:
A class parameter acquires a value at compile time and cannot be changed later.
Your methods can refer to parameters; that is why you define parameters. For example:

## Class Definitions and Types

The following shows an example of a class definition, which we will use to discuss types in class definitions:
This class definition defines one parameter (MYPARAMETER), two properties (DateOfBirth and Home), one instance method (CurrentAge()), and one class method (Addition()).
In class programming, you can specify types in the following key places:
For the class itself. The element after Extends is a type. Each type is the name of class. For parameters. In this case and in the remaining cases, the element after As is a type. For properties. For the Home property, the type is a class that itself contains properties. In this case, the type has an object value. In the example here, this is an object-valued property.Object-valued properties can contain other object-valued properties. For the return value of a method. For the value of any arguments used by a method.

## Inheritance

In most class-based languages, a major feature is inheritance: one class can inherit from other classes and thus acquire the parameters, properties, methods, and other elements of those other classes. Collectively, the parameters, properties, methods, and other elements are known as class members.
Terminology and Basics When class A inherits from class B, we use the following terminology: When a class inherits from other classes, it acquires the class members of those other classes, including members that the superclasses have themselves inherited. The subclass can override the inherited class members.It is possible for multiple superclasses of one class to define methods with the same name, properties with the same name, and so on. Therefore it is necessary to have rules for deciding which superclass contributes the definition that is used in the subclass. (See Inheritance.) In the InterSystems IRIS class library, superclasses usually have different purposes and have members with different names, and conflicts of member names are not common.

- Class A is a subclass of class B. Alternatively, class A extends class B. Sometimes it is said that class A is a subtype of class B.
- Class B is a superclass of class A.Sometimes it is said that class A is the child class and class B is the parent class. This terminology is common but can be misleading, because the words parent and child are used in quite a different sense when discussing SQL tables.
Example The following shows an example: This example is presented solely to demonstrate how a class can combine logic from different superclasses. This EnsLib.File.InboundAdapterOpens in a new tab class inherits from two classes that do quite different things: In EnsLib.File.InboundAdapterOpens in a new tab, the methods use logic from both of these classes, as well as their superclasses.

- Ens.InboundAdapterOpens in a new tab, which contains the basic logic for something known as an inbound adapter, a concept in InterSystems IRIS.
- EnsLib.File.CommonOpens in a new tab, which contains logic for working with sets of files in a given directory.
Use of Inherited Class Members When you see the definition of a class in an editing tool, you do not see the inherited members that it contains but your code can refer to them. For example, suppose that class A has two properties, each of which has a default value, as follows: Class B could look like this: As noted earlier, a subclass can override the inherited class members. For example, class C could also inherit from class A but could override the default value of one of its properties:
Use of Subclasses If class B inherits from class A, you can use an instance of class B in any location where you can use an instance of class A.For example, suppose that you have a utility method like the following: You can use an instance of MyApp.Person as input to this method. You can also use an instance of any subclass of MyApp.Person. For example: Similarly, the return value of a method (if it returns a value) can be an instance of a subclass of the specified type. For example, suppose that MyApp.Employee and MyApp.Patient are both subclasses of MyApp.Person. You could define a method as follows:

### Terminology and Basics

When class A inherits from class B, we use the following terminology: When a class inherits from other classes, it acquires the class members of those other classes, including members that the superclasses have themselves inherited. The subclass can override the inherited class members.It is possible for multiple superclasses of one class to define methods with the same name, properties with the same name, and so on. Therefore it is necessary to have rules for deciding which superclass contributes the definition that is used in the subclass. (See Inheritance.) In the InterSystems IRIS class library, superclasses usually have different purposes and have members with different names, and conflicts of member names are not common.

- Class A is a subclass of class B. Alternatively, class A extends class B. Sometimes it is said that class A is a subtype of class B.
- Class B is a superclass of class A.Sometimes it is said that class A is the child class and class B is the parent class. This terminology is common but can be misleading, because the words parent and child are used in quite a different sense when discussing SQL tables.

### Example

The following shows an example: This example is presented solely to demonstrate how a class can combine logic from different superclasses. This EnsLib.File.InboundAdapterOpens in a new tab class inherits from two classes that do quite different things: In EnsLib.File.InboundAdapterOpens in a new tab, the methods use logic from both of these classes, as well as their superclasses.

- Ens.InboundAdapterOpens in a new tab, which contains the basic logic for something known as an inbound adapter, a concept in InterSystems IRIS.
- EnsLib.File.CommonOpens in a new tab, which contains logic for working with sets of files in a given directory.

### Use of Inherited Class Members

When you see the definition of a class in an editing tool, you do not see the inherited members that it contains but your code can refer to them. For example, suppose that class A has two properties, each of which has a default value, as follows: Class B could look like this: As noted earlier, a subclass can override the inherited class members. For example, class C could also inherit from class A but could override the default value of one of its properties:

### Use of Subclasses

If class B inherits from class A, you can use an instance of class B in any location where you can use an instance of class A.For example, suppose that you have a utility method like the following: You can use an instance of MyApp.Person as input to this method. You can also use an instance of any subclass of MyApp.Person. For example: Similarly, the return value of a method (if it returns a value) can be an instance of a subclass of the specified type. For example, suppose that MyApp.Employee and MyApp.Patient are both subclasses of MyApp.Person. You could define a method as follows:

## Classes as Containers of Methods

As noted earlier, a class definition is often a template for objects. Another possibility is for a class to be a container for a set of class methods that belong together. In this case, you never create an instance of this class. You only invoke class methods in it.
For examples, see the classes in the %SYSTEM package.

## Abstract Classes

It is also useful to define abstract classes. An abstract class typically defines a generic interface and cannot be instantiated. A method definition within the class declares the signature of the method, but not its implementation.
You define an abstract class to describe an interface. Then you or other developers create subclasses, and in those subclasses, implement the methods. The implementation must match the signature specified in the abstract class. This system enables you to develop multiple, parallel classes with slightly different purposes but identical interfaces. Many of the system classes have common interfaces for this reason.
It is also possible to specify that a method is abstract even if the class is not.

## See Also

Defining Classes Creating Class Documentation

## Ejemplos de código

```objectscript
//create the object
 set diagnosis=##class(MyApp.Clinical.PatDiagnosis).%New()

 //set a couple of properties by using special variables
 set diagnosis.Date=$SYSTEM.SYS.TimeStamp()
 set diagnosis.EnteredBy=$username
 
 //set other properties based on variables set earlier by 
 //the user interface
 set diagnosis.PatientID=patientid
 set diagnosis.DiagnosedBy=clinicianid
 set diagnosis.Code=diagcode
 
 //save the data
 //the next line tries to save the data and returns a status to indicate
 //whether the action was successful
 set status=diagnosis.%Save()
 //always check the returned status
 if $$$ISERR(status) {do $System.Status.DisplayError(status) quit status}
```

```objectscript
//create the object
 set diagnosis=##class(MyApp.Clinical.PatDiagnosis).%New()

 //set a couple of properties by using special variables
 set diagnosis.Date=$SYSTEM.SYS.TimeStamp()
 set diagnosis.EnteredBy=$username
 
 //set other properties based on variables set earlier by 
 //the user interface
 set diagnosis.PatientID=patientid
 set diagnosis.DiagnosedBy=clinicianid
 set diagnosis.Code=diagcode
 
 //save the data
 //the next line tries to save the data and returns a status to indicate
 //whether the action was successful
 set status=diagnosis.%Save()
 //always check the returned status
 if $$$ISERR(status) {do $System.Status.DisplayError(status) quit status}
```

```objectscript
set status=diagnosis.%Save()
```

```objectscript
set status=diagnosis.%Save()
```

```objectscript
Method GetBMI() as %Numeric
{
 Set bmi=..WeightKg / (..HeightMeter**2)
 Quit bmi
}
```

```objectscript
Method GetBMI() as %Numeric
{
 Set bmi=..WeightKg / (..HeightMeter**2)
 Quit bmi
}
```

```objectscript
//open the requested patient given an id selected earlier
 set patient=##class(MyApp.Clinical.PatDiagnosis).%OpenId(id)  
 
 //get value to display in BMI Display field 
 set BMIDisplay=patient.GetBMI()
```

```objectscript
//open the requested patient given an id selected earlier
 set patient=##class(MyApp.Clinical.PatDiagnosis).%OpenId(id)  
 
 //get value to display in BMI Display field 
 set BMIDisplay=patient.GetBMI()
```

```objectscript
set patient=##class(MyApp.Clinical.PatDiagnosis).%New()
```

```objectscript
set patient=##class(MyApp.Clinical.PatDiagnosis).%New()
```

```objectscript
Class GORIENT.VariableScopeDemo
{

ClassMethod Add(arg1 As %Numeric, arg2 As %Numeric) As %Numeric
{
    Set ans=arg1+arg2
    Quit ans
}

ClassMethod Demo1()
{
   set x=..Add(1,2)
   write x
}

ClassMethod Demo2()
{
   set x=..Add(2,4)
   write x
}

}
```

```objectscript
Class GORIENT.VariableScopeDemo
{

ClassMethod Add(arg1 As %Numeric, arg2 As %Numeric) As %Numeric
{
    Set ans=arg1+arg2
    Quit ans
}

ClassMethod Demo1()
{
   set x=..Add(1,2)
   write x
}

ClassMethod Demo2()
{
   set x=..Add(2,4)
   write x
}

}
```

```objectscript
Parameter MYPARAMETER = "ABC" ;
```

```objectscript
Parameter MYPARAMETER = "ABC" ;
```

```objectscript
set myval=..#MYPARAMETER * inputvalue
```

```objectscript
set myval=..#MYPARAMETER * inputvalue
```

```objectscript
Class MyClass Extends %Library.Persistent
{
Parameter MYPARAMETER = "ABC" ; 

Property DateOfBirth As %Library.Date; 

Property Home As Sample.Address; 

Method CurrentAge() As %Library.Integer 
{
 //details
}

ClassMethod Addition(x As %Library.Integer, y As %Library.Integer) As %Library.Integer
{
 //details
}

}
```

```objectscript
Class MyClass Extends %Library.Persistent
{
Parameter MYPARAMETER = "ABC" ; 

Property DateOfBirth As %Library.Date; 

Property Home As Sample.Address; 

Method CurrentAge() As %Library.Integer 
{
 //details
}

ClassMethod Addition(x As %Library.Integer, y As %Library.Integer) As %Library.Integer
{
 //details
}

}
```

```objectscript
/// Finds files in a FilePath directory and submits all that match a FileSpec wildcard to 
/// an associated BusinessService for processing within InterSystems IRIS 
Class EnsLib.File.InboundAdapter Extends (Ens.InboundAdapter, EnsLib.File.Common)
```

```objectscript
/// Finds files in a FilePath directory and submits all that match a FileSpec wildcard to 
/// an associated BusinessService for processing within InterSystems IRIS 
Class EnsLib.File.InboundAdapter Extends (Ens.InboundAdapter, EnsLib.File.Common)
```

```objectscript
Class Demo.A  
{
Property Prop1 as %Library.String [InitialExpression = "ABC"];

Property Prop2 as %Library.String [InitialExpression = "DEF"];
}
```

```objectscript
Class Demo.A  
{
Property Prop1 as %Library.String [InitialExpression = "ABC"];

Property Prop2 as %Library.String [InitialExpression = "DEF"];
}
```

```objectscript
Class Demo.B Extends Demo.A  
{
Method PrintIt()
{
 Write ..Prop1,! 
 Write ..Prop2,! 
}

}
```

```objectscript
Class Demo.B Extends Demo.A  
{
Method PrintIt()
{
 Write ..Prop1,! 
 Write ..Prop2,! 
}

}
```

```objectscript
Class Demo.C Extends Demo.A  
{
Property Prop2 as %Library.String [InitialExpression = "GHI"];

}
```

```objectscript
Class Demo.C Extends Demo.A  
{
Property Prop2 as %Library.String [InitialExpression = "GHI"];

}
```

```objectscript
ClassMethod PersonReport(person as MyApp.Person) {
 //print a report that uses properties of the instance
}
```

```objectscript
ClassMethod PersonReport(person as MyApp.Person) {
 //print a report that uses properties of the instance
}
```

```objectscript
//id variable is set earlier in this program 
 set employee=##class(MyApp.Employee).%OpenId(id)
 do ##class(Util.Utils).PersonReport(employee)
```

```objectscript
//id variable is set earlier in this program 
 set employee=##class(MyApp.Employee).%OpenId(id)
 do ##class(Util.Utils).PersonReport(employee)
```

```objectscript
ClassMethod ReturnRandomPerson() as MyApp.Person
{
 Set randomnumber = $RANDOM(10)
 If randomnumber > 5 {
     set person=##class(MyApp.Employee).%New()
 }
 else {
     set person=##class(MyApp.Patient).%New()
 }
 quit person
}
```

```objectscript
ClassMethod ReturnRandomPerson() as MyApp.Person
{
 Set randomnumber = $RANDOM(10)
 If randomnumber > 5 {
     set person=##class(MyApp.Employee).%New()
 }
 else {
     set person=##class(MyApp.Patient).%New()
 }
 quit person
}
```
