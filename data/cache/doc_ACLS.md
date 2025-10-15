> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=ACLS

# Using the Classes Page | InterSystems IRIS Data Platform 2025.2

### Is this page helpful?

Please select a reason: Submit Cancel

Please select a reason: Submit Cancel

#### Please select a reason:

Easy to understand Well organized Found what I was looking for Enjoying the new design! Other
Submit Cancel

#### Please select a reason:

Hard to understand Content displayed poorly Didn't find what I needed I prefer the old design better Other
Submit Cancel

# Using the Classes Page

Contents

- Introduction to the Classes Page
- Compiling Classes
- Exporting Classes
- Importing Classes
- Deleting Classes
This page describes how to use the Management Portal tools for viewing and managing classes.
Introduction to the Classes Page The Management Portal includes the Classes page, which allows you to manage classes. On this page, you can: To access this page from the Management Portal home page: To display SQL table names, select the SQL table name check box. This includes the link View SQL related globals in the rows for any classes that have projections to SQL tables.

- Select Documentation in the row for a class to display documentation for that class in the right pane.
- Select Compile to compile classes.
- Select Export to export classes.
- Select Import to import classes.
- Select Delete to delete classes.
- Select Routines to view routines.
- Select Globals to view globals.

1. Select System Explorer > Classes.
2. Select the namespace or database of interest:

In the left pane, select either Namespaces or Databases from the Lookin list.

Select the desired namespace or database from the second drop-down list.
Selecting a namespace or database updates the page to display its classes.
3. In the left pane, select either Namespaces or Databases from the Lookin list.
4. Select the desired namespace or database from the second drop-down list.
5. If you are looking for a particular class and do not initially see its name:

Optionally select System items, Generated items, or Mapped items to include classes of the selected type in the search.

Optionally specify a search mask. To do so, enter a value into the Class name field. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each class whose name begins with the string before the asterisk.After entering a value, press Enter.

Optionally specify a Begin date and an End date to specify the range of dates to search on. The Date column specifies when the class was last modified.

Optionally enter a value for Maximum Rows, which determines the maximum number of rows to return.

In the center pane, optionally enter a value for Page size, which controls the number of classes to list on any page.
6. Optionally select System items, Generated items, or Mapped items to include classes of the selected type in the search.
7. Optionally specify a search mask. To do so, enter a value into the Class name field. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each class whose name begins with the string before the asterisk.After entering a value, press Enter.
8. Optionally specify a Begin date and an End date to specify the range of dates to search on. The Date column specifies when the class was last modified.
9. Optionally enter a value for Maximum Rows, which determines the maximum number of rows to return.
10. In the center pane, optionally enter a value for Page size, which controls the number of classes to list on any page.

- In the left pane, select either Namespaces or Databases from the Lookin list.
- Select the desired namespace or database from the second drop-down list.

- Optionally select System items, Generated items, or Mapped items to include classes of the selected type in the search.
- Optionally specify a search mask. To do so, enter a value into the Class name field. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each class whose name begins with the string before the asterisk.After entering a value, press Enter.
- Optionally specify a Begin date and an End date to specify the range of dates to search on. The Date column specifies when the class was last modified.
- Optionally enter a value for Maximum Rows, which determines the maximum number of rows to return.
- In the center pane, optionally enter a value for Page size, which controls the number of classes to list on any page.
Compiling Classes The Compile Classes wizard provides several options for compiling classes.To access and use this wizard:

1. Display the Classes page.
2. Specify the classes to compile. To do so, see steps 2 and 3 in Introduction to the Classes Page. Select their check boxes.
3. Click the Compile button, which displays the Compile Classes wizard.
4. In the Compile Classes wizard, specify the Compiler Flags that you would like to use by selecting the corresponding check box, or by entering them manually under Flags. By default, Flags is set to cuk.
5. Select the Run compile in the background check box if you are compiling many or large files.
6. Click the Compile button. The Compile Classes wizard will display information regarding the status of the compilation.
7. To dismiss the wizard, click Done.
Exporting Classes The Export Classes wizard enables you to export classes.To access and use this wizard:

1. Display the Classes page.
2. Specify the classes to work with. To do so, see steps 2 and 3 in Introduction to the Classes Page. Select their check boxes.
3. Click the Export button to display the Export Classes wizard.
4. In the Export Classes wizard, specify the file into which you wish to export the classes. To do this, either enter a file name (including its absolute or relative pathname) in the Enter the path and name of the export file field or click Browse and navigate to the file.
5. Select the export file’s character set with the Character set list.
6. Select the Run export in the background... check box if you are exporting many or large files.
7. Click Export.
8. If the file already exists, select OK to overwrite it with a new version.
9. To dismiss the wizard, click Done.
Importing Classes The Import Classes wizard enables you to import classes.To access and use this page: Note: This page enables you to import classes that have been exported in XML format. It does not support older formats.

1. Display the Classes page.
2. Click the Import button to display the Import Classes wizard.
3. In the Import Classes wizard, choose to import from a file or a directory by selecting the corresponding radio button under Import from a File or a Directory.
4. Specify the import file or directory. To do this, either enter a file or directory (including its absolute or relative pathname) in the Enter the path and name of the import file field or click Browse and navigate to the file or directory.
5. If importing from a directory, select or clear Include subdirectories.
6. Select or clear Compile imported items, and enter any Compile Flags.
7. Select Run import in the background if importing large files.
8. Click Import. The Import Classes wizard will display information regarding the status of the import.
9. To dismiss the wizard, click Done.
Deleting Classes Caution: A deleted class cannot be restored. There is no undo option. The Classes page enables you to delete classes. To access and use this page:

1. Display the Classes page.
2. Select the classes to work with. To do so, see steps 2 and 3 in Introduction to the Classes Page. Select their check boxes.
3. Click the Delete button.
4. Click OK to confirm this action.

## Introduction to the Classes Page

The Management Portal includes the Classes page, which allows you to manage classes. On this page, you can:
Select Documentation in the row for a class to display documentation for that class in the right pane. Select Compile to compile classes. Select Export to export classes. Select Import to import classes. Select Delete to delete classes. Select Routines to view routines. Select Globals to view globals.
To access this page from the Management Portal home page:
Select System Explorer > Classes. Select the namespace or database of interest: Selecting a namespace or database updates the page to display its classes. If you are looking for a particular class and do not initially see its name:

- In the left pane, select either Namespaces or Databases from the Lookin list.
- Select the desired namespace or database from the second drop-down list.

- Optionally select System items, Generated items, or Mapped items to include classes of the selected type in the search.
- Optionally specify a search mask. To do so, enter a value into the Class name field. If you end the string with an asterisk “*”, the asterisk is treated as a wildcard, and the page displays each class whose name begins with the string before the asterisk.After entering a value, press Enter.
- Optionally specify a Begin date and an End date to specify the range of dates to search on. The Date column specifies when the class was last modified.
- Optionally enter a value for Maximum Rows, which determines the maximum number of rows to return.
- In the center pane, optionally enter a value for Page size, which controls the number of classes to list on any page.
To display SQL table names, select the SQL table name check box. This includes the link View SQL related globals in the rows for any classes that have projections to SQL tables.

## Compiling Classes

The Compile Classes wizard provides several options for compiling classes.
To access and use this wizard:
Display the Classes page. Specify the classes to compile. To do so, see steps 2 and 3 in Introduction to the Classes Page. Select their check boxes. Click the Compile button, which displays the Compile Classes wizard. In the Compile Classes wizard, specify the Compiler Flags that you would like to use by selecting the corresponding check box, or by entering them manually under Flags. By default, Flags is set to cuk. Select the Run compile in the background check box if you are compiling many or large files. Click the Compile button. The Compile Classes wizard will display information regarding the status of the compilation. To dismiss the wizard, click Done.

## Exporting Classes

The Export Classes wizard enables you to export classes.
To access and use this wizard:
Display the Classes page. Specify the classes to work with. To do so, see steps 2 and 3 in Introduction to the Classes Page. Select their check boxes. Click the Export button to display the Export Classes wizard. In the Export Classes wizard, specify the file into which you wish to export the classes. To do this, either enter a file name (including its absolute or relative pathname) in the Enter the path and name of the export file field or click Browse and navigate to the file. Select the export file’s character set with the Character set list. Select the Run export in the background... check box if you are exporting many or large files. Click Export. If the file already exists, select OK to overwrite it with a new version. To dismiss the wizard, click Done.

## Importing Classes

The Import Classes wizard enables you to import classes.
To access and use this page:
Display the Classes page. Click the Import button to display the Import Classes wizard. In the Import Classes wizard, choose to import from a file or a directory by selecting the corresponding radio button under Import from a File or a Directory. Specify the import file or directory. To do this, either enter a file or directory (including its absolute or relative pathname) in the Enter the path and name of the import file field or click Browse and navigate to the file or directory. If importing from a directory, select or clear Include subdirectories. Select or clear Compile imported items, and enter any Compile Flags. Select Run import in the background if importing large files. Click Import. The Import Classes wizard will display information regarding the status of the import. To dismiss the wizard, click Done.
Note: This page enables you to import classes that have been exported in XML format. It does not support older formats.

## Deleting Classes

Caution: A deleted class cannot be restored. There is no undo option.
The Classes page enables you to delete classes. To access and use this page:
Display the Classes page. Select the classes to work with. To do so, see steps 2 and 3 in Introduction to the Classes Page. Select their check boxes. Click the Delete button. Click OK to confirm this action.
