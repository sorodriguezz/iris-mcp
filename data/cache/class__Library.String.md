> Fuente oficial: https://docs.intersystems.com/irislatest/csp/documatic/%25CSP.Documatic.cls?CLASSNAME=%25Library.String&LIBRARY=%25SYS

# %Library.String - InterSystems IRIS Data Platform 2025.2

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
%Library.String
Select Namespace:
%SYS
ENSLIB
Percent classes:
%Api
%Archive
%CSP
%Collection
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
AbstractArray
AbstractForeignServer
AbstractForeignTable
AbstractList
AbstractResultSet
AbstractStream
Any
ArrayOfDataTypes
ArrayOfObjects
ArrayOfObjectsWithClassName
AutoIncrement
Base
BigInt
Binary
BinaryStream
Boolean
COSCallout
Char
CharacterStream
Collate
Collation
CollationGenerator
CompiledClass
CompiledMethod
CompiledParameter
CompiledProperty
CompiledQuery
Compiler
CompleteCustomStorage
ConstraintAbstract
ConstraintForeignKey
ConstraintUnique
Conversion
Counter
Currency
CustomSerialState
CustomStorage
DataType
Date
DateTime
Decimal
Destroyer
Device
Double
DynamicAbstractObject
DynamicArray
DynamicGWQuery
DynamicObject
DynamicObjectQuery
DynamicQuery
DynamicQueryBM
DynamicQueryGW
DynamicSQLQuery
Embedding
EnsembleMgr
EnumString
ExactString
ExtentSQLQuery
File
FileBinaryStream
FileCharacterStream
FileStreamAdaptor
FilemanDate
FilemanTime
FilemanTimeStamp
FilemanTimeStampUTC
FilemanYear
Float
ForeignTableQuery
Function
FunctionalIndex
GTWCatalog
GTWConnection
GTWResultSet
GUID
Global
GlobalBinaryStream
GlobalCharacterStream
GlobalEdit
GlobalIdentifier
GlobalStreamAdaptor
IJCDevice
IProcedureContext
IResultSet
IStruct
InformixTimeStamp
Integer
JGWResultSet
List
ListOfBinary
ListOfDataTypes
ListOfObjects
ListOfObjectsWithClassName
MessageDictionary
MetaInfo
Name
NetworkAddress
Numeric
ObjectHandle
ObjectIdentity
ObjectJournal
ObjectJournalRecord
ObjectJournalTransaction
ObjectSynchronizer
Persistent
PersistentProperty
Populate
PopulateUtils
PosixTime
ProcedureContext
Prompt
PropertyHelper
Query
RawString
RegisteredObject
RelationshipObject
ResultSet
Routine
RoutineIndex
RoutineMgr
RowSQLQuery
RowVersion
SQLCatalog
SQLCatalogPriv
SQLConnection
SQLExImData
SQLExportMgr
SQLGatewayConnection
SQLImportMgr
SQLProcContext
SQLQuery
ScrollableResultSet
SerialObject
SerialState
SerialStream
ServerEvent
ShadowState
SmallInt
Status
Storage
StorageSQLMapSubInvCondDef
Stream
Current page: String
StringTimeStamp
SwizzleObject
SyntaxColor
SyntaxColorReader
SysLog
SysLogTable
SystemBase
Text
TextStreamInterface
Time
TimeStamp
TinyInt
TriggerHelper
UTC
UniqueIdentifier
Username
Utility
Vector
qccServer
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
Parameters (13)
Methods (9)
Subclasses (35)
 Show private members
%Library.String
datatype class %Library.String extends %Library.DataType
ODBC Type: VARCHARThe %String data type class represents a string.
The logical value of the %String data type is a string.
Method Inventory
DisplayToLogical()
IsValid()
JSONToLogical()
LogicalToDisplay()
LogicalToJSON()
LogicalToOdbc()
LogicalToXSD()
Normalize()
XSDToLogical()
Parameters
parameter COLLATION;
The default collation value used for this data type.
Note that if you specify a truncation length and also a VALUELIST then your truncation length must
be longer or equal to your longest VALUELIST value
parameter CONTENT = STRING;
XML element content "MIXED" for mixed="true" and "STRING" or "ESCAPE" for mixed="false".
If CONTENT="STRING" (default) XML special characters are put in a CDATA section during XML export.
If CONTENT="ESCAPE" XML special characters are escaped during XML export.
If CONTENT="ESCAPE-C14N" XML special characters are escaped during XML export using
the translate table, XMLC, specified for XML Canonicalizaton.
The main difference is that CR is escaped as &#13;
parameter DISPLAYLIST;
Used for enumerated (multiple-choice) attributes.
Used in conjunction with the VALUELIST parameter for enumerated
(multiple-choice) attributes. DISPLAYLIST, if not null,
represents the display values for the attribute corresponding with
the logical values listed in VALUELIST.
The display values are returned by the LogicalToDisplay method.
parameter ESCAPE = XML;
Controls the translate table used to escape content when CONTENT="MIXED" is specified.
parameter JSONLISTPARAMETER;
Used to specify the name of the parameter which contains the enumeration list for JSON values.
The parameter which contains the list must be in the format used for VALUELIST and DISPLAYLIST.
The default is VALUELIST.
parameter JSONTYPE = string;
JSONTYPE is JSON type used for this datatype.
parameter MAXLEN = 50;
The maximum number of characters the string can contain.
parameter MINLEN;
The minimum number of characters the string can contain.
parameter PATTERN;
A pattern which the string should match.
The value of PATTERN should be a valid
ObjectScript pattern match expression.
parameter TRUNCATE = 0;
Determines whether to truncate the string to MAXLEN characters.
parameter VALUELIST;
Used for enumerated (multiple-choice) attributes.
VALUELIST is either a null string ("") or a delimiter
separated list (where the delimiter is the first character) of logical values.
If a non-null value is present, then the attribute is restricted to values
in the list, and the validation code simply checks to see if the value is in the list.
parameter XMLLISTPARAMETER;
Used to specify the name of the parameter which contains the enumeration list for XML values.
The parameter which contains the list must be in the format used for VALUELIST and DISPLAYLIST.
The default is VALUELIST.
parameter XSDTYPE = string;
Declares the XSD type used when projecting XML Schemas.
Methods
classmethod DisplayToLogical(%val As %String) as %String
Converts the input value %val, which is a string, into the logical string format.
Returns the logical value of the input string %val.
classmethod IsValid(%val As %RawString) as %Status
Tests if the logical value %val, which is a string, is valid.
The validation is based on the class parameter settings used for the class attribute this data type is associated with.
In this case, MINLEN, MAXLEN, VALUELIST, and PATTERN.
classmethod JSONToLogical(%val As %String) as %String
If JSONLISTPARAMETER is specified, XSDToLogical is generated which imports using the list specified by JSONLISTPARAMETER.
classmethod LogicalToDisplay(%val As %String) as %String
Converts the value of %val, which is in logical format, into a display string. Removes all the null characters from the string.
Returns the string value of %val.
classmethod LogicalToJSON(%val As %String) as %String
If JSONLISTPARAMETER is specified, XSDToLogical is generated which exports using the list specified by JSONLISTPARAMETER.
classmethod LogicalToOdbc(%val As %String) as %String
classmethod LogicalToXSD(%val As %String) as %String
If XMLLISTPARAMETER is specified, XSDToLogical is generated which exports using the list specified by XMLLISTPARAMETER.
classmethod Normalize(%val As %RawString) as %String
Truncates value %val to MAXLEN, characters.
classmethod XSDToLogical(%val As %String) as %String
If XMLLISTPARAMETER is specified, XSDToLogical is generated which imports using the list specified by XMLLISTPARAMETER.
Subclasses
%CSP.Util.Choice
%CSP.Util.Passwd
%DeepSee.Datatype.className
%DeepSee.Datatype.entityName
%DeepSee.Datatype.expression
%DeepSee.Datatype.function
%DeepSee.Datatype.list
%DeepSee.Datatype.propertyName
%DeepSee.Datatype.string
%DeepSee.PMML.Datatype.String
%DeepSee.XMLA.String
%Library.Char
%Library.ExactString
%Library.NetworkAddress
%Library.Text
%Library.Username
%Monitor.String
%OAuth2.JSONString
%OAuth2.uri
%SYS.AuditString
%SYS.PTools.ModuleName
%SYS.Task.Password
%XML.GUID
%XML.Id
%XML.Oid
%XML.String
%ZEN.Datatype.datatype
%xsd.anyURI
%xsd.duration
%xsd.string
Config.CommentList
Config.Host
SYS.DataCheck.LocalDatabase
SYS.DataCheck.SystemName
Security.Datatype.PBKDF2Alg
FeedbackOpens in a new tab
© 2025 InterSystems Corporation, Boston, MA. All rights reserved.
PrivacyOpens in a new tab
 & TermsOpens in a new tab
GuaranteeOpens in a new tab
AccessibilityOpens in a new tab
Cookies SettingsCookie List
