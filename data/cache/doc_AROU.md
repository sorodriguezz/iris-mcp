> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=AROU

# Using the Routines Page | InterSystems IRIS Data Platform 2025.2

### Is this page helpful?

Please select a reason: Submit Cancel

Please select a reason: Submit Cancel

#### Please select a reason:

Easy to understand Well organized Found what I was looking for Enjoying the new design! Other
Submit Cancel

#### Please select a reason:

Hard to understand Content displayed poorly Didn't find what I needed I prefer the old design better Other
Submit Cancel

# Using the Routines Page

Contents

- Introduction to the Routines Page
- Compiling Routines
- Exporting Routines
- Importing Routines
- Finding Substrings in Routines
- Deleting Routines
- Comparing Routines
The Management Portal provides tools for managing routines. This page describes how to use these tools. See Routine Syntax for more information about routines.
Introduction to the Routines Page The Management Portal includes the Routines page (System Explorer > Routines), which allows you to manage routines. On this page, you can: To find specific routines:

- Select Code in the row for a routine to display code for that routine in the right pane.
- Select Compile to compile routines.
- Select Export to export routines.
- Select Import to import routines.
- Select Find to find substrings in routines.
- Select Replace to replace a substring in routines.
- Select Delete to delete routines.
- Select Compare to compare two routines.
- Select Classes to view classes.
- Select Globals to view globals.

1. Select the namespace or database of interest:

In the left pane, select either Namespaces or Databases from the Look in list.

Select the desired namespace or database from the second drop-down list.
Selecting a namespace or database updates the page to display its routines.
2. In the left pane, select either Namespaces or Databases from the Look in list.
3. Select the desired namespace or database from the second drop-down list.
4. If you are looking for a particular routine and do not initially see its name, try specifying the following options:

System items, Generated items, or Mapped items to include routines of the selected type in the search.

Begin date and End date to specify the range of dates to search on. The Date column specifies when the routine was last modified.

Routine and Include files to specify a search mask. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each routine whose name begins with the string before the asterisk. After entering a value, press Enter.You can also use the default masks, listed below the Routines and Include files field, by clicking on them.

Maximum Rows, which determines the maximum number of rows to return.

Page size, located on the center pane of the page, which controls the number of routines to list on any page.
5. System items, Generated items, or Mapped items to include routines of the selected type in the search.
6. Begin date and End date to specify the range of dates to search on. The Date column specifies when the routine was last modified.
7. Routine and Include files to specify a search mask. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each routine whose name begins with the string before the asterisk. After entering a value, press Enter.You can also use the default masks, listed below the Routines and Include files field, by clicking on them.
8. Maximum Rows, which determines the maximum number of rows to return.
9. Page size, located on the center pane of the page, which controls the number of routines to list on any page.

- In the left pane, select either Namespaces or Databases from the Look in list.
- Select the desired namespace or database from the second drop-down list.

- System items, Generated items, or Mapped items to include routines of the selected type in the search.
- Begin date and End date to specify the range of dates to search on. The Date column specifies when the routine was last modified.
- Routine and Include files to specify a search mask. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each routine whose name begins with the string before the asterisk. After entering a value, press Enter.You can also use the default masks, listed below the Routines and Include files field, by clicking on them.
- Maximum Rows, which determines the maximum number of rows to return.
- Page size, located on the center pane of the page, which controls the number of routines to list on any page.
Compiling Routines The Compile Routines wizard provides several options for compiling routines. To use this wizard on the Routines page:

1. Specify the routines to compile by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Compile button, which displays the Compile Routines wizard.
3. Select the Run compile in the background check box if you are compiling many or large files.
4. Click the Compile button. The Compile Routines wizard will display information regarding the status of the compilation.
5. To dismiss the wizard, click Done.
Exporting Routines The Export Routines wizard enables you to export routines. To use this wizard on the Routines page:

1. Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Export button to display the Export Routines wizard.
3. In the Export Routines wizard, choose to export to a file on the server or the default browser by selecting the corresponding radio button under the Export the file to the label.
4. Specify the file into which you wish to export the routines. To do this, either enter a file name (including its absolute or relative pathname, if exporting to the server) in the Enter the path and name of the export file field, or click Browse and navigate to the file.
5. Select the export file’s character set with the Character set list.
6. Select Check here for exporting OBJ code in XML format to export the routines in XML format.
7. Select the Run export in the background check box if you are exporting many or large files to the server.
8. Click Export.
9. If the file already exists, select OK to overwrite it with a new version.
10. To dismiss the wizard, click Done.
Importing Routines The Import Routines wizard enables you to import routines. To use this wizard on the Routines page: Note: This page enables you to import routines that have been exported in XML format. It does not support older formats.

1. Click the Import button to display the Import Routines wizard.
2. Specify the import file. To do this, either enter a file (including its absolute or relative pathname) in the Enter the path and name of the import file field or click Browse and navigate to the file or directory.
3. Select or clear Compile imported items, and enter any Compile Flags.
4. Select Run import in the background if importing large files.
5. Click Import. The Import Routines wizard will display information regarding the status of the import.
6. To dismiss the wizard, click Done.
Finding Substrings in Routines The Find Routine String page enables you to find a given string in selected routines. To use this page: Performing Wholesale Replacements Caution: Before making any edits, be sure that you know which routines InterSystems IRIS uses and which routines your application uses. This option changes the data permanently. It is not recommended for use in production systems. For development purposes, the Find Routine String page also provides an option to make wholesale changes to routines. To use this option on the Routines page:

1. Specify the routines to work with on the Routines page by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Find button.
3. For Find What, enter the string to search for.
4. Optionally clear Match Case. By default, the search is case-sensitive.
5. Click either Find First or Find All. The page then displays either the first line or all lines that contain the given string, within the selected routines. The table shows the line number on the left and the contents of the line on the right.
6. If you used Find First, click Find Next to see the next line, as needed.
7. When you are done, click Close Window.

1. Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Replace button.
3. Use this page to find values, as described in Finding Substrings in Routines.
4. Specify a value for Replace With.
5. Click Replace All.
6. Click OK to confirm this action. The page then displays a preview of the change.
7. Review the results. If they are acceptable, click Save; otherwise, click Undo Replace All.
8. Click OK to confirm this action.
Deleting Routines Caution: A deleted Routine cannot be restored. There is no undo option. The Routines page enables you to delete routines. To delete a routine:

1. Specify the routines to work with by selecting their check boxes. The Introduction to the Routines Page section describes the available search tools.
2. Click the Delete button.
3. Click OK to confirm this action.
Comparing Routines The Routine Compare page enables you to compare two selected routines. To use this utility on the Routines page:

1. Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Compare button to display the Routine Compare page.
3. On the Routine Compare page, you can specify routines to compare. If you did not select two routines in step 2, you can specify routines in the Routine 1 and Routine 2 fields.
4. Click Compare. The Differences between these two routines table appears, which displays the line-by-line differences between the two selected routines.

## Introduction to the Routines Page

The Management Portal includes the Routines page (System Explorer > Routines), which allows you to manage routines. On this page, you can:
Select Code in the row for a routine to display code for that routine in the right pane. Select Compile to compile routines. Select Export to export routines. Select Import to import routines. Select Find to find substrings in routines. Select Replace to replace a substring in routines. Select Delete to delete routines. Select Compare to compare two routines. Select Classes to view classes. Select Globals to view globals.
To find specific routines:
Select the namespace or database of interest: Selecting a namespace or database updates the page to display its routines. If you are looking for a particular routine and do not initially see its name, try specifying the following options:

- In the left pane, select either Namespaces or Databases from the Look in list.
- Select the desired namespace or database from the second drop-down list.

- System items, Generated items, or Mapped items to include routines of the selected type in the search.
- Begin date and End date to specify the range of dates to search on. The Date column specifies when the routine was last modified.
- Routine and Include files to specify a search mask. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each routine whose name begins with the string before the asterisk. After entering a value, press Enter.You can also use the default masks, listed below the Routines and Include files field, by clicking on them.
- Maximum Rows, which determines the maximum number of rows to return.
- Page size, located on the center pane of the page, which controls the number of routines to list on any page.

## Compiling Routines

The Compile Routines wizard provides several options for compiling routines. To use this wizard on the Routines page:
Specify the routines to compile by selecting their check boxes. Introduction to the Routines Page describes the available search tools. Click the Compile button, which displays the Compile Routines wizard. Select the Run compile in the background check box if you are compiling many or large files. Click the Compile button. The Compile Routines wizard will display information regarding the status of the compilation. To dismiss the wizard, click Done.

## Exporting Routines

The Export Routines wizard enables you to export routines. To use this wizard on the Routines page:
Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools. Click the Export button to display the Export Routines wizard. In the Export Routines wizard, choose to export to a file on the server or the default browser by selecting the corresponding radio button under the Export the file to the label. Specify the file into which you wish to export the routines. To do this, either enter a file name (including its absolute or relative pathname, if exporting to the server) in the Enter the path and name of the export file field, or click Browse and navigate to the file. Select the export file’s character set with the Character set list. Select Check here for exporting OBJ code in XML format to export the routines in XML format. Select the Run export in the background check box if you are exporting many or large files to the server. Click Export. If the file already exists, select OK to overwrite it with a new version. To dismiss the wizard, click Done.

## Importing Routines

The Import Routines wizard enables you to import routines. To use this wizard on the Routines page:
Click the Import button to display the Import Routines wizard. Specify the import file. To do this, either enter a file (including its absolute or relative pathname) in the Enter the path and name of the import file field or click Browse and navigate to the file or directory. Select or clear Compile imported items, and enter any Compile Flags. Select Run import in the background if importing large files. Click Import. The Import Routines wizard will display information regarding the status of the import. To dismiss the wizard, click Done.
Note: This page enables you to import routines that have been exported in XML format. It does not support older formats.

## Finding Substrings in Routines

The Find Routine String page enables you to find a given string in selected routines. To use this page:
Specify the routines to work with on the Routines page by selecting their check boxes. Introduction to the Routines Page describes the available search tools. Click the Find button. For Find What, enter the string to search for. Optionally clear Match Case. By default, the search is case-sensitive. Click either Find First or Find All. The page then displays either the first line or all lines that contain the given string, within the selected routines. The table shows the line number on the left and the contents of the line on the right. If you used Find First, click Find Next to see the next line, as needed. When you are done, click Close Window.
Performing Wholesale Replacements Caution: Before making any edits, be sure that you know which routines InterSystems IRIS uses and which routines your application uses. This option changes the data permanently. It is not recommended for use in production systems. For development purposes, the Find Routine String page also provides an option to make wholesale changes to routines. To use this option on the Routines page:

1. Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Replace button.
3. Use this page to find values, as described in Finding Substrings in Routines.
4. Specify a value for Replace With.
5. Click Replace All.
6. Click OK to confirm this action. The page then displays a preview of the change.
7. Review the results. If they are acceptable, click Save; otherwise, click Undo Replace All.
8. Click OK to confirm this action.

### Performing Wholesale Replacements

Caution: Before making any edits, be sure that you know which routines InterSystems IRIS uses and which routines your application uses. This option changes the data permanently. It is not recommended for use in production systems. For development purposes, the Find Routine String page also provides an option to make wholesale changes to routines. To use this option on the Routines page:

1. Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools.
2. Click the Replace button.
3. Use this page to find values, as described in Finding Substrings in Routines.
4. Specify a value for Replace With.
5. Click Replace All.
6. Click OK to confirm this action. The page then displays a preview of the change.
7. Review the results. If they are acceptable, click Save; otherwise, click Undo Replace All.
8. Click OK to confirm this action.

## Deleting Routines

Caution: A deleted Routine cannot be restored. There is no undo option.
The Routines page enables you to delete routines. To delete a routine:
Specify the routines to work with by selecting their check boxes. The Introduction to the Routines Page section describes the available search tools. Click the Delete button. Click OK to confirm this action.

## Comparing Routines

The Routine Compare page enables you to compare two selected routines. To use this utility on the Routines page:
Specify the routines to work with by selecting their check boxes. Introduction to the Routines Page describes the available search tools. Click the Compare button to display the Routine Compare page. On the Routine Compare page, you can specify routines to compare. If you did not select two routines in step 2, you can specify routines in the Routine 1 and Routine 2 fields. Click Compare. The Differences between these two routines table appears, which displays the line-by-line differences between the two selected routines.
