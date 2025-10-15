> Fuente oficial: https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=ACODESCAN

# Scanning for Deprecated Code | InterSystems IRIS Data Platform 2025.2

### Is this page helpful?

Please select a reason: Submit Cancel

Please select a reason: Submit Cancel

#### Please select a reason:

Easy to understand Well organized Found what I was looking for Enjoying the new design! Other
Submit Cancel

#### Please select a reason:

Hard to understand Content displayed poorly Didn't find what I needed I prefer the old design better Other
Submit Cancel

# Scanning for Deprecated Code

Contents

- ScanDocuments Query
- ScanDocument Query
- Example
- Scanning Mapped Code
- See Also
The class %SYSTEM.CodeScannerOpens in a new tab enables you to quickly find code that refers to deprecated classes and deprecated class members. This class provides two class queries, described here.
ScanDocuments Query The ScanDocuments class query returns a result set that contains the following fields: By default, the query scans only classes and routines in the default routine database for the current namespace, although you can pass a parameter to include mapped code. Also, the query ignores classes and routines that have names starting with %, as well as any classes that are marked as deprecated.The query is projected to SQL as the %SYSTEM.ScanDocuments stored procedure.

- Document identifies the class or routine that contains the reference. For example:

ResearchXForms.BasicDemo.cls
- Location identifies the location of the reference, within the given class or routine. For example:

ClassMethod CreateOne Implementation+4
- Message explains what is deprecated. For example:

Class '%Library.FileBinaryStream' is deprecated.
ScanDocument Query The ScanDocument class query takes one argument document, which is the name of a class, MAC routine, or INT routine. This argument includes the file extension, for example: MyPkg.MyClass.clsThis query returns a result set that contains the following fields:

- Location indicates the line number or class keyword describing where the deprecated reference is, within the given code item.
- Message string describing the deprecated reference.
Example For example, you could write code as follows: The following shows example output:
Scanning Mapped Code By default, the query scans only classes and routines in the default routine database for the current namespace. To include classes and routines from mapped databases, specify the query argument as 1, by passing that argument when executing the class query. For example:
See Also

- %SYSTEM.CodeScannerOpens in a new tab

## ScanDocuments Query

The ScanDocuments class query returns a result set that contains the following fields:
Document identifies the class or routine that contains the reference. For example: Location identifies the location of the reference, within the given class or routine. For example: Message explains what is deprecated. For example:
By default, the query scans only classes and routines in the default routine database for the current namespace, although you can pass a parameter to include mapped code. Also, the query ignores classes and routines that have names starting with %, as well as any classes that are marked as deprecated.
The query is projected to SQL as the %SYSTEM.ScanDocuments stored procedure.

## ScanDocument Query

The ScanDocument class query takes one argument document, which is the name of a class, MAC routine, or INT routine. This argument includes the file extension, for example: MyPkg.MyClass.cls
This query returns a result set that contains the following fields:
Location indicates the line number or class keyword describing where the deprecated reference is, within the given code item. Message string describing the deprecated reference.

## Example

For example, you could write code as follows:
The following shows example output:

## Scanning Mapped Code

By default, the query scans only classes and routines in the default routine database for the current namespace. To include classes and routines from mapped databases, specify the query argument as 1, by passing that argument when executing the class query. For example:

## See Also

%SYSTEM.CodeScannerOpens in a new tab

## Ejemplos de código

```objectscript
ResearchXForms.BasicDemo.cls
```

```objectscript
ResearchXForms.BasicDemo.cls
```

```objectscript
ClassMethod CreateOne Implementation+4
```

```objectscript
ClassMethod CreateOne Implementation+4
```

```objectscript
Class '%Library.FileBinaryStream' is deprecated.
```

```objectscript
Class '%Library.FileBinaryStream' is deprecated.
```

```objectscript
ClassMethod Check()
{
    set stmt = ##class(%SQL.Statement).%New()
    set status = stmt.%PrepareClassQuery("%SYSTEM.CodeScanner","ScanDocuments")
    if $$$ISERR(status) {quit}
    set rset = stmt.%Execute()
    if rset.%SQLCODE<0 {quit}

    while rset.%Next() {
        set Document=rset.%Get("Document")
        set Location=rset.%Get("Location")
        set Message=rset.%Get("Message")
        write !, Document_" "_Location_" "_Message  
    }
}
```

```objectscript
ClassMethod Check()
{
    set stmt = ##class(%SQL.Statement).%New()
    set status = stmt.%PrepareClassQuery("%SYSTEM.CodeScanner","ScanDocuments")
    if $$$ISERR(status) {quit}
    set rset = stmt.%Execute()
    if rset.%SQLCODE<0 {quit}

    while rset.%Next() {
        set Document=rset.%Get("Document")
        set Location=rset.%Get("Location")
        set Message=rset.%Get("Message")
        write !, Document_" "_Location_" "_Message  
    }
}
```

```objectscript
ResearchXForms.BasicDemo.cls Property BinStream Type Class '%Library.GlobalBinaryStream' is deprecated.
ResearchXForms.BasicDemo.cls Property CharStream1 Type Class '%Library.GlobalCharacterStream' is deprecated.
ResearchXForms.BasicDemo.cls Property CharStream2 Type Class '%Library.GlobalCharacterStream' is deprecated.
ResearchXForms.BasicDemo.cls Property CharStream3 Type Class '%Library.GlobalCharacterStream' is deprecated.
ResearchXForms.BasicDemo.cls ClassMethod CreateOne Implementation+4 Class '%Library.FileBinaryStream' is deprecated.
ResearchXForms.BasicDemo.cls ClassMethod RoundTripBin Implementation+1 Class '%Library.FileBinaryStream' is deprecated.
```

```objectscript
ResearchXForms.BasicDemo.cls Property BinStream Type Class '%Library.GlobalBinaryStream' is deprecated.
ResearchXForms.BasicDemo.cls Property CharStream1 Type Class '%Library.GlobalCharacterStream' is deprecated.
ResearchXForms.BasicDemo.cls Property CharStream2 Type Class '%Library.GlobalCharacterStream' is deprecated.
ResearchXForms.BasicDemo.cls Property CharStream3 Type Class '%Library.GlobalCharacterStream' is deprecated.
ResearchXForms.BasicDemo.cls ClassMethod CreateOne Implementation+4 Class '%Library.FileBinaryStream' is deprecated.
ResearchXForms.BasicDemo.cls ClassMethod RoundTripBin Implementation+1 Class '%Library.FileBinaryStream' is deprecated.
```

```objectscript
ClassMethod Check()
{
    set stmt = ##class(%SQL.Statement).%New()
    set status = stmt.%PrepareClassQuery("%SYSTEM.CodeScanner","ScanDocuments")
    if $$$ISERR(status) {quit}
    set rset = stmt.%Execute(1)
    if rset.%SQLCODE<0 {quit}

    while rset.%Next() {
        set Document=rset.%Get("Document")
        set Location=rset.%Get("Location")
        set Message=rset.%Get("Message")
        write !, Document_" "_Location_" "_Message  
    }
}
```

```objectscript
ClassMethod Check()
{
    set stmt = ##class(%SQL.Statement).%New()
    set status = stmt.%PrepareClassQuery("%SYSTEM.CodeScanner","ScanDocuments")
    if $$$ISERR(status) {quit}
    set rset = stmt.%Execute(1)
    if rset.%SQLCODE<0 {quit}

    while rset.%Next() {
        set Document=rset.%Get("Document")
        set Location=rset.%Get("Location")
        set Message=rset.%Get("Message")
        write !, Document_" "_Location_" "_Message  
    }
}
```
