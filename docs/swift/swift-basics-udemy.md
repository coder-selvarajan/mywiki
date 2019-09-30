---
id: swift-basics-udemy
title: Swift Basics (from udemy.com)
sidebar_label: Swift Basics (udemy)
---

> This page was created while I was learning Swift with **udemy.com** course

Swift 4 is a new programming language developed by Apple Inc for iOS and OS X development. Swift 4 adopts the best of C and Objective-C, without the constraints of C compatibility.

* Swift 4 provides Objective-C like syntax.
* Swift 4 provides seamless access to existing Cocoa frameworks.
* Swift 4 unifies the procedural and object-oriented portions of the language.
* Swift 4 does not need a separate library import to support functionalities like input/output or string handling.
* Swift 4 uses the same runtime as the existing Obj-C system on Mac OS and iOS
* Swift 4 comes with playground feature where Swift 4 programmers can write their code and execute it to see the results immediately.
* You can use the import statement to import any Objective-C framework (or C library) directly into your Swift 4 program

**Tokens**

A Swift 4 program consists of various tokens and a token is either a keyword, an identifier, a constant, a string literal, or a symbol. For example, the following Swift 4 statement consists of three tokens −
```swift
print("test!")
```

Semicolons are not needed in Swift, however if you are combining more than one statement then you can use semicolon to separate them.
```swift
var myString # "Hello, World!"; print(myString)
```

Swift 4 does not allow special characters such as @, $, and % within identifiers. Swift 4 is a case sensitive programming language. Thus, Manpower and manpower are two different identifiers in Swift 4. Here are some examples of acceptable identifiers −

    Azad        zara   abc   move_name   a_123
    myname50    _temp  j     a23b9       retVal

**Literals**

A literal is the source code representation of a value of an integer, floating-point number, or string type. The following are examples of literals  
```swift
92               // Integer literal
4.24159          // Floating-point literal
"Hello, World!"  // String literal
```

---

## Built-in Data Types

Swift 4 offers the programmer a rich assortment of built-in as well as user-defined data types. The following types of basic data types are most frequently when declaring variables −

* **Int or UInt** − This is used for whole numbers. More specifically, you can use Int32, Int64 to define 32 or 64 bit signed integer, whereas UInt32 or UInt64 to define 32 or 64 bit unsigned integer variables. For example, 42 and -23.

* **Float** − This is used to represent a 32-bit floating-point number and numbers with smaller decimal points. For example, 3.14159, 0.1, and -273.158.

* **Double** − This is used to represent a 64-bit floating-point number and used when floating-point values must be very large. For example, 3.14159, 0.1, and -273.158.

* **Bool** − This represents a Boolean value which is either true or false.

* **String** − This is an ordered collection of characters. For example, "Hello, World!"

* **Character** − This is a single-character string literal. For example, "C"

* **Optional** − This represents a variable that can hold either a value or no value.

* **Tuples** − This is used to group multiple values in single Compound Value.


**Type : Bit Width | Range**

**Int8** : 1byte	| -127 to 127

**UInt8** : 1byte	| 0 to 255

**Int32** : 4bytes | -2147483648 to 2147483647
    
**UInt32** : 4bytes | 0 to 4294967295

**Int64** : 8bytes | -9223372036854775808 to 9223372036854775807

**UInt64** : 8bytes | 0 to 18446744073709551615

**Float** : 4bytes | 1.2E-38 to 3.4E+38 (~6 digits)

**Double** : 8bytes | 2.3E-308 to 1.7E+308 (~15 digits)


### Type Aliases

You can create a new name for an existing type using typealias. Here is the simple syntax to define a new type using typealias −

    typealias newname = type

For example, the following line instructs the compiler that Feet is another name for Int −

    typealias Feet = Int

the whole code goes like this
```swift
typealias Feet = Int
var distance: Feet = 100
print(distance)
```

### Type Safety

Swift 4 is a type-safe language which means if a part of your code expects a String, you can't pass it an Int by mistake.

As Swift 4 is type-safe, it performs type-checks when compiling your code and flags any mismatched types as errors.
```swift
var varA = 42
varA = "This is hello"
print(varA)
```

When we compile the above program, it produces the following compile time error.

### Type Inference

Type inference enables a compiler to deduce the type of a particular expression automatically when it compiles your code
```swift
// varA is inferred to be of type Int
var varA = 42
print(varA)

// varB is inferred to be of type Double
var varB = 3.14159
print(varB)

// varC is also inferred to be of type Double
var varC = 3 + 0.14159
print(varC)
```

---

## Variable declaration

Swift has two ways of declaring variables, One by assigning value in the variable and another one by using type annotation. Example: 

```swift
var varA = 42
print(varA)

var varB:Float
varB = 3.14159
print(varB)
```

The name of a variable can be composed of letters, digits, and the underscore character. It must begin with either a letter or an underscore. Upper and lowercase letters are distinct because Swift 4 is a case-sensitive programming language. We can even use `unicode characters` as well
```swift
var _var = "Hello, Swift 4!"
print(_var)
var பெயர் = "பிரேம்"
print(பெயர்)
```

**Printing Variables**

You can interpolate a variable value by wrapping the name in parentheses and escape it with a backslash before the opening parenthesis: 
```swift
var varA = "Godzilla"
var varB = 1000.00

print("Value of \(varA) is more than \(varB) millions")
```

---

## Optionals

Swift 4 also introduces Optionals type, which handles the absence of a value. Optionals say either "there is a value, and it equals x" or "there isn't a value at all".

Here’s an optional Integer & String declarations 
```swift
var perhapsInt: Int?
var perhapsStr: String?
```

Above statements are equivalent to 
```swift
var perhapsInt: Int? = nil
var perhapsStr: String? = nil
```

**Forced Unwrapping :**

If you defined a variable as optional, then to get the value from this variable, you will have to unwrap it. This just means putting an exclamation mark at the end of the variable.

Let's take a simple example −
```swift
var myString:String?
myString = "Hello, Swift 4!"

if myString != nil {
    print(myString)
    print(myString!) //unwrapping applied here
} else {
    print("myString has nil value")
}
```

When we run the above program using playground, we get the following result −
```swift
Optional("Hello, Swift 4!")
Hello, Swift 4!
```

**Automatic Unwrapping :**

You can declare optional variables using exclamation mark instead of a question mark. Such optional variables will unwrap automatically and you do not need to use any further exclamation mark at the end of the variable to get the assigned value. Let's take a simple example −
```swift
var myString:String!
myString = "Hello, Swift 4!"

if myString != nil {
    print(myString)
} else {
    print("myString has nil value")
}
```

When we run the above program using playground, we get the following result −

    Hello, Swift 4!

**Optional Binding :**

Use optional binding to find out whether an optional contains a value, and if so, to make that value available as a temporary constant or variable.

An optional binding for the if statement is as follows −
```swift
if let constantName = someOptional {
    statements
}
```

Let's take a simple example to understand the usage of optional binding −
```swift
var myString:String?
myString = "Hello, Swift 4!"

if let yourString = myString {
    print("Your string has - \(yourString)")
} else {
    print("Your string does not have a value")
}
```

When we run the above program using playground, we get the following result −

    Your string has - Hello, Swift 4!

---

## Tuples

Swift 4 also introduces Tuples type, which are used to group multiple values in a single compound Value. The values in a tuple can be of any type, and do not need to be of same type.

For example, `("Tutorials Point", 123)` is a tuple with two values, one of string Type, and other is integer type. It is a legal command.

You can create tuples from as many values as you want and from any number of different data types.
```swift
var TupleName = (Value1, value2,… any number of values)
```

Here’s a Tuple declaration −
```swift
var error501 = (501, “Not implemented”)
```

You can access the values of tuple using the index numbers that start from 0.
```swift
print("The code is\(error501.0)")
print("The definition of error is\(error501.1)")
```

You can name the variables of a tuple while declaring , and you can call them using their names
```swift
var error501 = (errorCode: 501, description: "Not Implemented")
print(error501.errorCode)   // prints 501.
```

Tuples are helpful in returning multiple values from a function. By returning different values in a tuple we can make decisions depending on different tuple types.

Note: Tuples are useful for temporary values and are not suited for complex data.

---

## Literals

**Constants Declaration**

Before you use constants, you must declare them using let keyword as follows 
```swift
let constA = 42
print(constA)

let constB:Float = 3.14159
print(constB)
```

**Integer Literals**

An integer literal can be a decimal, binary, octal, or hexadecimal constant. Binary literals begin with 0b, octal literals begin with 0o, and hexadecimal literals begin with 0x and nothing for decimal.
```swift
let decimalInteger = 17         // 17 in decimal notation
let binaryInteger = 0b10001     // 17 in binary notation
let octalInteger = 0o21         // 17 in octal notation
let hexadecimalInteger = 0x11   // 17 in hexadecimal notation
```

**Floating-point Literals**

A floating-point literal has an integer part, a decimal point, a fractional part, and an exponent part. You can represent floating point literals either in decimal form or hexadecimal form.
```swift
let decimalDouble = 12.1875
let exponentDouble = 1.21875e1
let hexadecimalDouble = 0xC.3p0
```

**String Literals**

String literals cannot contain an unescaped double quote ("), an unescaped backslash (\), a carriage return, or a line feed. Special characters can be included in string literals using the following escape sequences −

* `\0` = Null Character
* `\\` = \character
* `\b` = Backspace
* `\f` = Form feed
* `\n` = Newline
* `\r` = Carriage return
* `\t` = Horizontal tab
* `\v` = Vertical tab
* `\'` = Single Quote
* `\"` = Double Quote
* `\000` = Octal number of one to three digits
* `\xhh...` =  Hexadecimal number of one or more digits

Sample string literal usage : 
```swift
let stringL # "Hello\tWorld\n\nHello\'Swift 4\'"
print(stringL)
```

The Result would be
```swift
Hello World

Hello'Swift 4'
```

---

## Operators

**Comparison Operators** : {nbsp} `== {nbsp} != {nbsp} > {nbsp} < {nbsp} >= {nbsp} <=`

**Logical Operators**: {nbsp} `&& {nbsp} || {nbsp} !`

**Bitwise Operators** : {nbsp} `& {nbsp} | {nbsp} ^ {nbsp} ~ {nbsp} << {nbsp} >>`

`&`  
Binary AND Operator copies a bit to the result, if it exists in both operands.  
(A & B) will give 12, which is 0000 1100

`|`  
Binary OR Operator copies a bit, if it exists in either operand.  
(A | B) will give 61, which is 0011 1101

`^`  
Binary XOR Operator copies the bit, if it is set in one operand but not both.   
(A ^ B) will give 49, which is 0011 0001

`~`  
Binary Ones Complement Operator is unary and has the effect of 'flipping' bits.  
(~A ) will give -61, which is 1100 0011 in 2's complement form.

`<<`  
Binary Left Shift Operator. The left operands value is moved left by the number of bits specified by the right operand.  
(A << 2 will give 240, which is 1111 0000

`>>`  
Binary Right Shift Operator. The left operands value is moved right by the number of bits specified by the right operand.  
A >> 2 will give 15, which is 0000 1111


Assume A = 60; and B = 13;  
In binary format, they will be as follows:

    A = 0011 1100
    B = 0000 1101
    -----------------
    A&B = 0000 1100
    A|B = 0011 1101
    A^B = 0011 0001
    ~A = 1100 0011

**Assignment Operators** : {nbsp} `= {nbsp} += {nbsp} -= {nbsp} *= {nbsp} /= {nbsp} %= {nbsp} >>= {nbsp} <<= {nbsp} &= {nbsp} ^= {nbsp} |=`

_Note: `C << = 2` is same as `C = C << 2`_


### Range Operators 

Swift 4 includes two range operators, which are shortcuts for expressing a range of values. The following table explains these two operators.

Closed Range  
    (a...b) defines a range that runs from a to b, and includes the values a and b. +
    1...5 gives 1, 2, 3, 4 and 5

Half-Open Range  
    (a..< b) defines a range that runs from a to b, but does not include b. +
    1..< 5 gives 1, 2, 3, and 4

One-sided Range  
    a… , defines a range that runs from a to end of elements  
    1… gives 1 , 2,3… end of elements  
    
    …a , defines a range starting from start to a +
    …2 gives beginning… to 1,2


### Misc Operators

Swift 4 supports a few other important operators including range and ? : which are explained in the following table.

Unary Minus  
    The sign of a numeric value can be toggled using a prefixed  
    -3 or -4

Unary Plus  
    Returns the value it operates on, without any change  
    +6 gives 6

Ternary Conditional  
    Condition ? X : Y  
    If Condition is true ? Then value X : Otherwise value Y  

### Operators Precedence

Operator precedence determines the grouping of terms in an expression. This affects how an expression is evaluated. Certain operators have higher precedence than others; for example, the multiplication operator has higher precedence than the addition operator.

Here, operators with the highest precedence appear at the top of the table, those with the lowest appear at the bottom. Within an expression, higher precedence operators will be evaluated first.

Primary Expression Operators (left-to-right)  
	`() [] . expr++ expr--`  

Unary Operators (right-to-left)  
    `* & + - ! ~ ++expr --expr`  
    `* / %`  
    `+ -`  
    `>> <<`  
    `< > <= >=`  
    `== !=`  

Binary Operators (left-to-right)  
    `& ^ | && ||`  

Ternary Operator (right-to-left)  
    `?:`  
    
Assignment Operators (right-to-left)  
    `= += -= *= /= %= >>= <<= &=^= |=`  

Comma (left-to-right)  
    `,`  

## Decision Making

**If Statement:**

```swift
var varA:Int = 100;

/* Check the boolean condition using if statement */
if varA == 20 {
    print("varA is equal to than 20");
} else if varA == 50 {
    print("varA is equal to than 50");
} else {
    print("None of the values is matching");
}
print("Value of variable varA is \(varA)");
```

**Switch statement:**

```swift
var index = 10

switch index {
case 100 :
    print( "Value of index is 100")
case 10,15 :
    print( "Value of index is either 10 or 15")
default :
    print( "default case")
}
```

**The `? :` Operator**

Conditional operator `? :` can be used to replace if...else statements. It has the following general form  

    Exp1 ? Exp2 : Exp3;

---

## Loops

**For in :**
```swift
var someInts:[Int] = [10, 20, 30]

for index in someInts {
    print( "Value of index is \(index)")
}
```

**While loop :**
```swift
var index = 10

while index < 20 {
    print( "Value of index is \(index)")
    index = index + 1
}
```

**Repeat while :**
```swift
var index = 10

repeat {
    print( "Value of index is \(index)")
    index = index + 1
}
while index < 20
```

**Continue statement :**
```swift
var index = 10

repeat {
    index = index + 1
    if( index == 15 ){
        continue
    }
    print( "Value of index is \(index)")
} while index < 20
```

Here number 15 will be skipped printing

**Break Statement :**
```swift
var index = 10

repeat {
    index = index + 1
    if( index == 15 ){
        break
    }
    print( "Value of index is \(index)")
} while index < 20
```

Here numbers after 15 will be skipped printing

**Switch fallthrough :**

If we do not use fallthrough statement, then the program will come out of the switch statement after executing the matching case statement. 

_EXAMPLE1:_
```swift
var index = 10

switch index {
case 100 :
    print( "Value of index is 100")
case 10,15 :
    print( "Value of index is either 10 or 15")
case 5 :
    print( "Value of index is 5")
default :
    print( "default case")
}
```

_OUTPUT:_
    
    Value of index is either 10 or 15


_EXAMPLE2:_
```swift
var index = 10

switch index {
    case 100 :
        print( "Value of index is 100")
        fallthrough
    case 10,15 :
        print( "Value of index is either 10 or 15")
        fallthrough
    case 5 :
        print( "Value of index is 5")
    default :
        print( "default case")
}
```

_OUTPUT:_

    Value of index is either 10 or 15 +
    Value of index is 5

---

## Strings

_EXAMPLE:_
```swift
// String creation using String literal
var stringA = "Hello, Swift 4!"
print( stringA )

// String creation using String instance
var stringB = String("Hello, Swift 4!")
print( stringB )

//Multiple line string

let stringC = """
Hey this is a
example of multiple Line
string by tutorialsPoint 
"""
print(stringC)
```

_OUTPUT:_ 

    Hello, Swift 4!
    Hello, Swift 4!
    Hey this is a
    example of multiple Line
    string by tutorialsPoint

**Empty String:**
```swift
// Empty string creation using String instance
let stringB = String()

if stringB.isEmpty {
    print( "stringB is empty" )
} else {
    print( "stringB is not empty" )
}
```

**String Constants:**
```swift
// stringB can not be modified
let stringB = String("Hello, Swift 4!")
stringB + = "--Readers--"
print( stringB )
```

_OUTPUT:_ 

    Swift throws an error!

**String Interpolation:** 

```swift
var varA = 20
let constA = 100
var varC:Float = 20.0

var stringA = "\(varA) times \(constA) is equal to \(varC * 100)"
print( stringA )
```

_OUTPUT:_

    20 times 100 is equal to 2000.0

**String iteration:**

```swift
for chars in "ThisString" {
    print(chars, terminator: " ")
}
```

**Unicode strings:**

You can access a UTF-8 and UTF-16 representation of a String by iterating over its utf8 and utf16 properties

```swift
var unicodeString = "Dog???"

print("UTF-8 Codes: ")
for code in unicodeString.utf8 {
    print("\(code) ")
}

print("\n")

print("UTF-16 Codes: ")
for code in unicodeString.utf16 {
    print("\(code) ")
}
```

### String Functions & Operators

**isEmpty**  
    A Boolean value that determines whether a string is empty or not.

**hasPrefix(prefix: String)**  
    Function to check whether a given parameter string exists as a prefix of the string or not.

**hasSuffix(suffix: String)**  
    Function to check whether a given parameter string exists as a suffix of the string or not.

**toInt()**  
    Function to convert numeric String value into Integer.

**count()**  
    Global function to count the number of Characters in a string.

**utf8**  
    Property to return a UTF-8 representation of a string.

**utf16**  
    Property to return a UTF-16 representation of a string.

**unicodeScalars**  
    Property to return a Unicode Scalar representation of a string.

**+**  
    Operator to concatenate two strings, or a string and a character, or two characters.

**+=**  
    Operator to append a string or character to an existing string.

**==**
    Operator to determine the equality of two strings.

**<**  
    Operator to perform a lexicographical comparison to determine whether one string evaluates as less than another.

**startIndex**  
    To get the value at starting index of string.

**endIndex**  
    To get the value at ending index of string.

**Indices**  
    To access the indeces one by one. i.e all the characters of string one by one.

**insert("Value", at: position)**  
    To insert a value at a position.

**remove(at: position)**

**removeSubrange(range)**  
    to remove a value at a position, or to remove a range of values from string.

**reversed()**  
    returns the reverse of a string

### Characters

A character in Swift is a single character String literal, addressed by the data type Character. If you try to store more than one character in a Character type variable or constant, then Swift will not allow that.

It is not possible to create an empty Character variable or constant which will have an empty value. The following syntax is not possible  
```swift
// Following is wrong in Swift 4
let char1: Character = ""
var char2: Character = ""

print("Value of char1 \(char1)")
print("Value of char2 \(char2)")
```

**Asscessing characters from string :**  
```swift
for ch in "Hello" {
    print(ch)
}
```

**Concatenating Strings with Characters :**  
```swift
var varA:String = "Hello "
let varB:Character = "G"

varA.append( varB )

print("Value of varC = \(varA)")
```

_OUTPUT:_

    Value of varC = Hello G

