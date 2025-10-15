> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=GUNITTEST_results

# Viewing %UnitTest Results | The %UnitTest Framework for InterSystems IRIS | InterSystems IRIS Data Platform 2025.2

### Is this page helpful?

Please select a reason: Submit Cancel

Please select a reason: Submit Cancel

#### Please select a reason:

Easy to understand Well organized Found what I was looking for Enjoying the new design! Other
Submit Cancel

#### Please select a reason:

Hard to understand Content displayed poorly Didn't find what I needed I prefer the old design better Other
Submit Cancel

# Viewing %UnitTest Results

Contents

- Viewing Unit Tests
- Unit Test Report
You can view the results of your tests in any of the following ways:
In the console — Basic test results are printed to the console output. In the %UnitTest.Result.TestAssertOpens in a new tab table — Test results are stored in tabular form in ^UnitTest.Result, and they can be accessed via the %UnitTest.Result.TestAssertOpens in a new tab table. In the Management Portal — Running a unit test generates a test report that comprises a series of web pages. Test reports are organized by namespace, and they can be viewed in the Management Portal, in the UnitTest Portal area. See Viewing %UnitTest Reports in the Management Portal for details.
Viewing %UnitTest Results Programmatically Test asserts, including test results, are logged in the %UnitTest.Result.TestAssertOpens in a new tab table for structured access to the data. The table includes the following fields: Status Logical Value Meaning 0 failed 1 passed 2 skipped Action The name of the $$$AssertX macro used to perform the test. Note that the leading $$$ are not included in the table. Description The value of the test_description argument you passed to the $$$AssertX macro. If test_description was not passed, this field defaults to the string representation of the first argument to the $$$AssertX macro. See Macros of the %UnitTest.TestCase Class for details about $$$AssertX macro arguments. Location The location in the test class from which the test assert originates, in label[+offset]^[|"ns"|]doc.ext format. Troubleshooting Test Assert Locations Under certain circumstances, it is possible the test assert locations may not be properly mapped back to the classes. For example, if all of the locations are in generated INT routines. In such cases, you should run your tests with the /keepsource and /generatemap qualifiers in the qualifiers argument to RunTest()Opens in a new tab. This enables the test manager to resolve the routine locations back to the source classes.
Viewing %UnitTest Reports in the Management Portal Executing tests generates a hierarchical report, available in the Management Portal, containing results related to all tests executed. If the report indicates a test has passed, that means the relevant $$$AssertX macro returned true: Your test produced the expected result. Test failure indicates the macro returned false: Your test did not produce the expected result, and you may need to debug the method being tested.Follow these steps to view the report in the Management Portal:

1. Grant access for the %UnitTest classes to access the UnitTest Portal in the USER namespace by creating a percent-class access rule for the /csp/user application with the following settings: 

Type: AllowPrefix

Class name: %UnitTest.

Allow access: True (box selected)

Add this same access to ALL applications: False (box cleared)

Note:

This step must be executed once, for security reasons, or you will not be able to navigate to Unit Test Portal in the Management Portal.
2. Type: AllowPrefix
3. Class name: %UnitTest.
4. Allow access: True (box selected)
5. Add this same access to ALL applications: False (box cleared)
6. In the Management Portal, navigate to System Explorer > Tools > UnitTest Portal, and switch back to the USER namespace.
7. To launch UnitTest Portal and view your test report, click Go. Your report displays.
8. Drill down in the report by following the links in the report to find increasingly specific information. 

The first page provides a summary for all test suites. 

The second page displays results by each test suite.

The third page displays the results by each test case.

The fourth page displays the results broken out by test method.

The final page displays results for each $$$AssertX macro used in a test method.
9. The first page provides a summary for all test suites.
10. The second page displays results by each test suite.
11. The third page displays the results by each test case.
12. The fourth page displays the results broken out by test method.
13. The final page displays results for each $$$AssertX macro used in a test method.

- Type: AllowPrefix
- Class name: %UnitTest.
- Allow access: True (box selected)
- Add this same access to ALL applications: False (box cleared)

- The first page provides a summary for all test suites.
- The second page displays results by each test suite.
- The third page displays the results by each test case.
- The fourth page displays the results broken out by test method.
- The final page displays results for each $$$AssertX macro used in a test method.

## Viewing %UnitTest Results Programmatically

Test asserts, including test results, are logged in the %UnitTest.Result.TestAssertOpens in a new tab table for structured access to the data. The table includes the following fields:
Status Logical Value Meaning 0 failed 1 passed 2 skipped
Action The name of the $$$AssertX macro used to perform the test. Note that the leading $$$ are not included in the table.
Description The value of the test_description argument you passed to the $$$AssertX macro. If test_description was not passed, this field defaults to the string representation of the first argument to the $$$AssertX macro. See Macros of the %UnitTest.TestCase Class for details about $$$AssertX macro arguments.
Location The location in the test class from which the test assert originates, in label[+offset]^[|"ns"|]doc.ext format.
Troubleshooting Test Assert Locations Under certain circumstances, it is possible the test assert locations may not be properly mapped back to the classes. For example, if all of the locations are in generated INT routines. In such cases, you should run your tests with the /keepsource and /generatemap qualifiers in the qualifiers argument to RunTest()Opens in a new tab. This enables the test manager to resolve the routine locations back to the source classes.

### Troubleshooting Test Assert Locations

Under certain circumstances, it is possible the test assert locations may not be properly mapped back to the classes. For example, if all of the locations are in generated INT routines. In such cases, you should run your tests with the /keepsource and /generatemap qualifiers in the qualifiers argument to RunTest()Opens in a new tab. This enables the test manager to resolve the routine locations back to the source classes.

## Viewing %UnitTest Reports in the Management Portal

Executing tests generates a hierarchical report, available in the Management Portal, containing results related to all tests executed.
If the report indicates a test has passed, that means the relevant $$$AssertX macro returned true: Your test produced the expected result. Test failure indicates the macro returned false: Your test did not produce the expected result, and you may need to debug the method being tested.
Follow these steps to view the report in the Management Portal:
Grant access for the %UnitTest classes to access the UnitTest Portal in the USER namespace by creating a percent-class access rule for the /csp/user application with the following settings: Note: This step must be executed once, for security reasons, or you will not be able to navigate to Unit Test Portal in the Management Portal. In the Management Portal, navigate to System Explorer > Tools > UnitTest Portal, and switch back to the USER namespace. To launch UnitTest Portal and view your test report, click Go. Your report displays. Drill down in the report by following the links in the report to find increasingly specific information.

- Type: AllowPrefix
- Class name: %UnitTest.
- Allow access: True (box selected)
- Add this same access to ALL applications: False (box cleared)

- The first page provides a summary for all test suites.
- The second page displays results by each test suite.
- The third page displays the results by each test case.
- The fourth page displays the results broken out by test method.
- The final page displays results for each $$$AssertX macro used in a test method.
