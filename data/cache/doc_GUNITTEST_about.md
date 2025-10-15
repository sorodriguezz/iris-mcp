> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GUNITTEST_about

# About the InterSystems IRIS %UnitTest Framework | The %UnitTest Framework for InterSystems IRIS | InterSystems IRIS Data Platform 2025.2

# About the InterSystems IRIS %UnitTest Framework

%UnitTest is the InterSystems IRIS unit testing framework. Developers familiar with xUnit frameworks will find the structures contained within %UnitTest familiar:
Create unit tests by extending the %UnitTest.TestCaseOpens in a new tab class, adding test methods. See Extending the %UnitTest.TestCase Class for details. Execute preparation and cleanup tasks by adding code to special cleanup and preparation methods in the %UnitTest.TestCaseOpens in a new tab class. See %UnitTest.TestCase Class Preparation and Cleanup Methods for details. Use the RunTest() method in the %UnitTest.ManagerOpens in a new tab class to execute your tests. The general results appear in your terminal window. See Executing Unit Tests Using the %UnitTest.Manager Methods for details. View the test results web page in the Management Portal for more detailed information. See Viewing %UnitTest Reports in the Management Portal for details.
The %UnitTest package includes the following classes:
TestCase — Extend this class to create your testing class, then add class methods that contain your unit tests. Manager — Contains methods to execute your unit tests. Report — Controls the output from testing, including a test results web page.
