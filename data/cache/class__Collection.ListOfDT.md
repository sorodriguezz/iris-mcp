> Fuente oficial: https://docs.intersystems.com/irislatest/csp/documatic/%25CSP.Documatic.cls?CLASSNAME=%25Collection.ListOfDT&LIBRARY=%25SYS

# %Collection.ListOfDT - InterSystems IRIS Data Platform 2025.2

Skip to main content
<link rel="stylesheet" id="noscriptstylesheet" type="text/css" href="https://docs.intersystems.com/irislatest/csp/docbook/noscriptstyles.css">
<div class="noscriptbanner" data-swiftype-index="false"><p>Sorry, your browser does not support JavaScript or JavaScript is disabled. Please enable JavaScript or use another browser to have a better experience.</p></div>
Learning
Documentation
Community
Open Exchange
Global Masters
Certification
Partner Directory
InterSystems IRIS Data Platform 2025.2Opens in a new tab
Class Reference
%SYS namespace
%Collection.ListOfDT
Select Namespace:
%SYS
ENSLIB
Percent classes:
%Api
%Archive
%CSP
%Collection
AbstractArray
AbstractArrayOfDT
AbstractArrayOfObj
AbstractIterator
AbstractList
AbstractListOfDT
AbstractListOfObj
ArrayOfDT
ArrayOfObj
ArrayOfObjCN
ArrayOfStream
Current page: ListOfDT
ListOfObj
ListOfObjCN
ListOfStream
MV
Super
%DeepSee
%Dictionary
%DocDB
%Embedding
%Exception
%ExtentMgr
%External
%FileMan
%Installer
%Iterator
%JSON
%Library
%MFT
%Monitor
%Net
%OAuth2
%Projection
%REST
%Regex
%SAML
%SOAP
%SQL
%SYS
%SYSTEM
%Stream
%Studio
%Trace
%UnitTest
%WebStress
%XDBC
%XML
%ZEN
%iFind
%iKnow
%xsd
Backup
Config
DataMove
INFORMATION
Journal
MonitorTools
OAuth2
PKI
SYS
Security
InterSystems IRIS 2025.2 DocumentationOpens in a new tab
AskMe (beta)
Open AI assistant
2025.2
AskMe (beta)
Send feedback
Reset
Hide
Send
Responses may be inaccurate. Learn more about AskMe.
Report Issue with AskMe
If you're experiencing an issue with AskMe or want to provide feedback, email us at
AskMeSupport@intersystems.com
Include relevant details, such as the response text or screenshots, to help us resolve the issue.
Thanks for your feedback!Need to tell us more? Click here or use the Feedback button.
Is this page helpful?
Please select a reason:
Easy to understand
Well organized
Found what I was looking for
Enjoying the new design!
Other
Submit
Cancel
Please select a reason:
Hard to understand
Content displayed poorly
Didn't find what I needed
I prefer the old design better
Other
Submit
Cancel
Class Details
Properties (1)
Methods (22)
Inherited Members
Subclasses (1)
 Show private members
%Collection.ListOfDT
class %Collection.ListOfDT extends %Collection.AbstractListOfDT, %Collection.SuperFor information on this class, see
Working with Collections.
The %Collection.ListOfDT class represents a list of literal (i.e., data type) values
each of which is associated with a numeric position in the list.
The first element in the list is stored at position 1.
These %Collection classes can only be used when you have a collection property of another object as they rely on
storing the data inside the parent object, they cannot be used as 'standalone' collections; for this, use the %ListOfDataTypes.
Property Inventory
Size
Method Inventory
Count()
DeSerialize()
DisplayToLogical()
FDBMSToLogical()
Find()
GetAt()
GetNext()
GetPrevious()
Insert()
InsertAt()
InsertList()
InsertOrdered()
IsDefined()
LogicalToDisplay()
LogicalToFDBMS()
Next()
Previous()
RemoveAt()
Serialize()
SetAt()
SizeGet()
SizeSet()
Properties
property Size as %Integer [ Calculated ];
Size is the number of elements contained in the list. This is the same value returned by the Count().
Property methods: SizeDisplayToLogical(), SizeIsValid(), SizeLogicalToDisplay(), SizeNormalize()
Methods
final method Count() as %Integer
Returns the number of elements contained in the list.
method DeSerialize(serialized As %String(MAXLEN="")) as %Status
Inherited description: Deserialize from string created with Serialize() back to collection
classmethod DisplayToLogical(val As %String = "", delim As %String = {$char(13, 10)}, class As %String = "", method As %String = "") as %String
Converts the value of an incoming delimited string to a serialized state
using the value of the delim argument as a delimiter.
classmethod FDBMSToLogical(val As %String = "", delim As %String = {$char(13, 10)}) as %String
Converts the value of an incoming delimited string to a serialized state
using the value of the delim argument as a delimiter.
method Find(element As %String, key As %Integer) as %String
Starting from, and including, position key, Find finds
the next element in the list with value equal to element.
If key is a null string, Find starts at the beginning
of the list.
Find returns the position of the found element or
null string ("") if no element was found.
final method GetAt(key As %Integer = 0) as %String
Finds and returns the value of the element at position
key in the list.
GetAt returns the value of the element at location key
or null string ("") if no element is found.
method GetNext(ByRef key As %Integer) as %String
Finds and returns the value of the element at the position after key
in the list. If key is a null string (""), it returns
the value of the first element in the list.
The value of key, which is passed by reference, is updated to the position
value of the returned element or null string ("") if key
is at the end of the list.
method GetPrevious(ByRef key As %Integer) as %String
Finds and returns the value of the element at the position before key
in the list. If key is a null string (""), it returns
the value of the last element in the list.
The value of key, which is passed by reference, is updated to the position
value of the returned element or null string ("")
if key is at the beginning of the list.
method Insert(element As %String) as %Status
Inserts an element with value element at the end of the list.
Returns a %Status value indicating success or failure.
method InsertAt(element As %String, key As %Integer) as %Status
Inserts an element with value element at position key.
To make room for the new element, the elements previously at or following position
key are moved up by one position.
key must be in the following range:
1 <= key <= Count() + 1
Returns a %Status value indicating success or failure.
method InsertList(inslist As %String) as %Status
Inserts a list with value inslist at the end of the list.
Returns a %Status value indicating success or failure.
method InsertOrdered(element As %String) as %Status
Inserts an element with value element into the list at the correct ordered
position. The elements in the list are shifted to accommodate the new element as necessary.
Returns a %Status value indicating success or failure.
method IsDefined(key As %Integer) as %Boolean
Returns true (1) if a value is defined at location key,
otherwise false (0).
classmethod LogicalToDisplay(val As %String = "", delim As %String = {$char(13, 10)}, class As %String = "", method As %String = "") as %String
Converts the serial state of this list object to a delimited string
using the value of the %delim argument as a delimiter.
classmethod LogicalToFDBMS(val As %String = "", delim As %String = {$char(13, 10)}) as %String
Converts the serial state of this list object to a delimited string
using the value of the %delim argument as a delimiter.
final method Next(key As %Integer = 0) as %Integer
Finds and returns the index value of the element at the location following key in the list.
If key is a null string (""), then Next returns the position of the first element in the list (1).
final method Previous(key As %Integer = 0) as %Integer
Finds and returns the index value of the element at the location preceding key in the list.
If key is a null string (""), then Next returns the position of the last element in the list.
method RemoveAt(key As %Integer) as %String
Removes the element at position key in the list.
The elements following position key are moved to fill in the resulting gap.
RemoveAt returns the value of the removed element or null string ("")
if no element was removed.
method Serialize(force As %Integer = 0) as %String
Serialize() constructs a serialized form of the collection as a string
method SetAt(element As %String, key As %Integer) as %Status
Sets the value of the element at position key to element.
Returns a %Status value indicating success or failure.
method SizeGet() as %Integer
abstract method SizeSet(newvalue As %Integer) as %Status
Inherited Members
Inherited Properties
ElementClassType
ElementType
LiteralBehavior
OrefStorage
Owner
ReadOnly
Storage
StreamLocation
Inherited Methods
%AddToSaveSet()
%ClassIsLatestVersion()
%ClassName()
%ConstructClone()
%Disconnect()
%DispatchClassMethod()
%DispatchGetModified()
%DispatchGetProperty()
%DispatchMethod()
%DispatchSetModified()
%DispatchSetMultidimProperty()
%DispatchSetProperty()
%Extends()
%GetParameter()
%IsA()
%IsModified()
%IsNull()
%New()
%NormalizeObject()
%ObjectModified()
%OriginalNamespace()
%PackageName()
%RemoveFromSaveSet()
%SerializeObject()
%SetModified()
%ValidateObject()
BuildValueArray()
Clear()
LogicalToOdbc()
OdbcToLogical()
Subclasses
%Collection.MV.ListOfDT
FeedbackOpens in a new tab
© 2025 InterSystems Corporation, Boston, MA. All rights reserved.
PrivacyOpens in a new tab
 & TermsOpens in a new tab
GuaranteeOpens in a new tab
AccessibilityOpens in a new tab
Cookies SettingsCookie List
