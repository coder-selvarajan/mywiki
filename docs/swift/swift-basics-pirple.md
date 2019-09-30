---
id: swift-basics-pirple
title: Swift Basics (from pirple.com)
sidebar_label: Swift Basics (pirple)
---

> This page was created while I was learning Swift with **pirple.com** course

## Variable declaration
```swift
// 1
var/let name : type = value

// 2
var/let name : type
name = value

// 3
var/let name = value
```

**Primitive types**  
Int, Int8, Int16, Int32, Int64, UInt, UInt8, UInt16, UInt32, UInt64  
Float(32), Double(64), CGFloat(Similar to Float)  
Bool  
Character  

```swift
// Valid. length=1
var char1 : Character = "?" 
    
// Invalid, length=0  
var char2 : Character = ""
```

Emojis can be represented with Character

## Strings

Not a primitive type
```swift
let name : String = "Mammoth Interative"
let startIndex = name.index(name.startIndex, offsetBy: 3)
let endIndex = name.index(name.startIndex, offsetBy: 7)
let moth : String = name.substring(with: startIndex..<endIndex)  
// Result: moth
```

Multilevel string:
```swift
let multilineString : String = """
    Hello how are you?
    I'm doing well, how are you?
"""
```

Optional:
```swift
let test : String? = "Axe"
test = nil
```

## Tuples

Tuples are variables/constants with multiple values
```swift
// syntax
var/let name : (val_type1, val_type2) = (val1, val2)

let item : (String,Int) = ("Food", 10)
let itemName : String = item.0
let itemQuantity : Int = item.1

// another way
let (name, quantity) = item
let (name, _) = item

// assigning param name 
let item2 = (name: "Matches", qty: 15)
```

**Type Convertion**  
Double(10)  
Float(15)  
Int(50.79) // 50  
String(50) // "50"  

**Conditional Operators**  
==, !=, <, <=, >, >=, ===, !==

**Logical**  
&&, ||, |

**Ternary**  
a ? result_if_true : result_if_false

**Nil-coalescing**  
a ?? b
int1 = int2 ?? 10 // if int2 is nil, then int1 will be assigned to 10

## Collections

**Collection types**

## Arrays 
```swift
var inventory : [String] = ["food", "hat", "coat"]

// reassigning
inventory = ["food", "shirt"]

//multiple type values
var randomArray : [Any] = [1, false, "hello"]

// type of declarations
var array1 : [Int] = []
var array2 = [Int]()

// assigning value
var array3 : [Int] = [0,0,0,0,0,0]
// defaulting value in array
var array4 : [Int] = Array(repeating: 0, count: 5)

```

*Retrieve Elements/Attributes :*

```swift
var inventory : [(String,Int)] = [("Gloves",2),("Fruit",4),("Axe",1)]
let secondItem : (String, Int) = inventory[1]

//handling of nil and access to first element
let firstItem : (String,Int)? = inventory.first
// getting the inner value
let thirdItemName : String = inventory[2].0

//to find item in array
let array2 : [Int] = [1,4,2,5,7]
array2.contains(10)
```

*Modify Array/Elements :*

```swift
// modify array
inventory = [("Gloves",3),("Fruit",5),("Shoes",6)]
// modify item
inventory[1] = ("Gloves", 2)

// update second and third items in array
inventory[1...2] = [("fish",3), ("socks", 9)]

// append item
inventory.append(("Glasses", 1))
// or
inventory += [("fish",3), ("socks", 9)]

// insert at position
inventory.insert(("Hat",2), at: 2)

// remove item
inventory.remove(at: 0)

```


## Multi-dimentional Array

```swift
// multi-dim array
var shoppingList : [[String]] = [
    ["fruit","cheese","bread"],
    ["t-shirt","shorts"],
    ["paper towel"]]

// retrieve data
let shorts : String = shoppingList[1][1]
let bread : String = shoppingList[0][2]
```

## Ranges
```swift
// range as var
var range1 = 1...10
var range2 = 1..<10
let higherThan5 = 6...

for number in range1 {
    print(number)
}

// use of range with array
let numArray : [Int] = [1,2,4,5,7,8,9]
for number in numArray[4...] {
    print(number)
}
```

Range can be used in Switch statement as well.
```swift
var health : Int = 95

switch health {
case 100:
    print("full health")
case 50..<100:
    print("healthy")
case 1..<50:
    print("low health")
case 0:
    print("dead")
default :
    print("health out of range")
}
```

**Checking nil value:**  
```swift
var item : String? = "Fruit"
var itemName : String = ""

// checking nil
if (item != nil) {
    itemName = item! //unwrapping
}

// another way
if let itemName = item {
    // execute code based on itemName
}

// another different approach is
func doSomething() {
    guard let itemName3 = item else { return }
    print(itemName3)
}
doSomething()

```
