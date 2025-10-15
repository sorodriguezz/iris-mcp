> Fuente oficial: https://docs.intersystems.com/irislatest/csp/documatic/%25CSP.Documatic.cls?CLASSNAME=%25Collection.ArrayOfDT&LIBRARY=%25SYS

# %Collection.ArrayOfDT - InterSystems IRIS Data Platform 2025.2

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
%Collection.ArrayOfDT
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
Current page: ArrayOfDT
ArrayOfObj
ArrayOfObjCN
ArrayOfStream
ListOfDT
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
Methods (15)
Inherited Members
Subclasses (1)
 Show private members
%Collection.ArrayOfDT
class %Collection.ArrayOfDT extends %Collection.AbstractArrayOfDT, %Collection.SuperFor information on this class, see
Working with Collections.
The %Collection.ArrayOfDataTypes class represents an array of literal (i.e., data type) elements,
each of which is associated with a unique key value. Keys can have any value, string or numeric.
These %Collection classes can only be used when you have a collection property of another object as they rely on
storing the data inside the parent object, they cannot be used as 'standalone' collections, for this use the %ArrayOfDataTypes.
Method Inventory
Count()
DeSerialize()
Define()
DisplayToLogical()
Find()
GetAt()
GetNext()
GetPrevious()
IsDefined()
LogicalToDisplay()
Next()
Previous()
RemoveAt()
Serialize()
SetAt()
Methods
method Count() as %Integer
Returns the number of elements contained in the array.
method DeSerialize(serialized As %String(MAXLEN="")) as %Status
Inherited description: Deserialize from string created with Serialize() back to collection
deprecated method Define(key As %String) as %Boolean
This method is deprecated.
Please use IsDefined() instead.
classmethod DisplayToLogical(val As %String = "", delim As %String = {$c(13, 10)}, class As %String = "", method As %String = "") as %String
Converts the value of an incoming delimited string to a serialized state
using delim as a delimiter.
method Find(element As %String, key As %String) as %String
Starting from, but not including, location key,
finds the next element in the array with value equal to element.
If key is a null string (""), the search starts at the beginning of the array.
Find returns the key associated with the found element or null string ("") if no element is found.
method GetAt(key As %String = "") as %String
Finds and returns the value of the element associated with key.
GetAt returns the value of the element associated with key
or null string ("") if no element is found.
method GetNext(ByRef key As %String) as %String
Finds and returns the value of the element at the location after key
in the array. If key is a null string (""), it returns
the value of the first element in the array.
The value of key, which is passed by reference, is updated to the key
value of the returned element or null string ("") if key is at the end of the array.
method GetPrevious(ByRef key As %String) as %String
Finds and returns the value of the element at the location before key
in the array. If key is a null string (""), it returns
the value of the last element in the array.
The value of key, which is passed by reference, is updated to the key
value of the returned element or null string ("") if key is at the beginning of the array.
method IsDefined(key As %String) as %Boolean
Returns true (1) if a value is defined at location key,
otherwise false (0).
classmethod LogicalToDisplay(val As %String = "", delim As %String = {$c(13, 10)}, class As %String = "", method As %String = "") as %String
Converts the serial state of this array object to a delimited string
using delim as a delimiter.
method Next(key As %String = "") as %String
Finds and returns the key value of the element at the location following key in the array.
If key is a null string (""), then Next returns the key value for the first element in the array.
method Previous(key As %String = "") as %String
Finds and returns the key value of the element at the location preceding key in the array.
If key is a null string (""), then Previous() returns the key value for the last element in the array.
method RemoveAt(key As %String) as %String
Removes the element associated with key in the array.
RemoveAt returns the value of the removed element or null string ("")
if no element was removed.
method Serialize(force As %Integer = 0) as %String
Serialize() constructs a serialized form of the collection as a string
method SetAt(element As %String, key As %String) as %Status
Sets the value of the element associated with key to element.
Returns a %Status value indicating success or failure.
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
%Collection.MV.ArrayOfDT
FeedbackOpens in a new tab
© 2025 InterSystems Corporation, Boston, MA. All rights reserved.
PrivacyOpens in a new tab
 & TermsOpens in a new tab
GuaranteeOpens in a new tab
AccessibilityOpens in a new tab
Cookies SettingsCookie List
