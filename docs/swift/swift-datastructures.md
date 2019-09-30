---
id: swift-datastructures
title: Data Structures
---

## Arrays

The syntax of array looks like this

```swift
var someArray = [SomeType](count: nElements, repeatedValue: InitValue)
```

You can use the following statement to create an empty array of Int type having 3 elements and the initial value as zero 
```swift
var someInts = [Int](count: 3, repeatedValue: 0)
```

Following is one more example to create an array of three elements and assign three values to that array
```swift
var someInts:[Int] = [10, 20, 30]
```

The following example shows how to create, initialize, and access arrays −
```swift
var someInts = [Int](count: 3, repeatedValue: 10)

var someVar = someInts[0]
print( "Value of first element is \(someVar)" )
print( "Value of second element is \(someInts[1])" )
print( "Value of third element is \(someInts[2])" )
```

_OUTPUT:_ 

    Value of first element is 10
    Value of second element is 10
    Value of third element is 10

**Modifying Arrays**

You can use append() method or addition assignment operator (+=) to add a new item at the end of an array. Take a look at the following example. Here, initially, we create an empty array and then add new elements into the same array −
```swift
var someInts = [Int]()

someInts.append(20)
someInts.append(30)
someInts += [40]

// Modify last element
someInts[2] = 50

var someVar = someInts[0]

print( "Value of first element is \(someVar)" )
print( "Value of second element is \(someInts[1])" )
print( "Value of third element is \(someInts[2])" )
```

_OUTPUT:_

    Value of first element is 20
    Value of second element is 30
    Value of third element is 50

*Iterating over an array :*
```swift
var someStrs = [String]()

someStrs.append("Apple")
someStrs.append("Amazon")
someStrs += ["Google"]
for item in someStrs {
    print(item)
}
```

You can use enumerate() function which returns the index of an item along with its value as shown below 
```swift
var someStrs = [String]()

someStrs.append("Apple")
someStrs.append("Amazon")
someStrs += ["Google"]

for (index, item) in someStrs.enumerated() {
    print("Value at index = \(index) is \(item)")
}
```

### Adding Two Arrays

You can use the addition operator (+) to add two arrays of the same type which will yield a new array with a combination of values from the two arrays as follows 
```swift
var intsA = [Int](count:2, repeatedValue: 2)
var intsB = [Int](count:3, repeatedValue: 1)

var intsC # intsA + intsB
for item in intsC {
    print(item)
}
```

_OUTPUT:_

    2
    2
    1
    1
    1

---

## Sets

Swift 4 sets are used to store distinct values of same types but they don’t have definite ordering as arrays have.

A type must be hashable to be stored in a set. A hash value is a Int value that is equal for equal objects. For example, if x == y, then x.hashvalue == y.hashvalue.

All the basic swift values are of hashable type by default and may be used as set values.

### Creating Sets

You can create an empty set of a certain type using the following initializer syntax
```swift
var someSet = Set<Character>()     
//Character can be replaced by data type of set.

//OR you can create it with below way too
let letters: Set = [a,b,c,d]
```

### Accessing and modifying Sets
```swift
someSet.count  // prints the number of elements
someSet.insert("c")  // adds the element to Set.
someSet.isEmpty  // returns true or false depending on the set Elements.
someSet.remove("c")  // removes a element 
//removeAll() can be used to remove all elements

someSet.contains("c")  // to check if set contains this value.
```

### Iterating over a Set

You can iterate over a set using for-in loop −  
```swift
for items in someSet {
    print(someSet)
}

//Swift sets are not in an ordered way, 
//to iterate over a set in ordered way use
for items in someSet.sorted() {
    print(someSet)
}  
```

### Performing Set Operations

Following are the methods for performing set operations −

- Intersection
- Union
- subtracting

```swift
let evens: Set = [10,12,14,16,18]
let odds: Set = [5,7,9,11,13]
let primes = [2,3,5,7]
odds.union(evens).sorted()
// [5,7,9,10,11,12,13,14,16,18]
odds.intersection(evens).sorted()
//[]
odds.subtracting(primes).sorted()
//[9, 11, 13]
```

--- 

## Dictionaries

Swift 4 dictionaries are used to store unordered lists of values of the same type. 

A dictionary key can be either an integer or a string without a restriction, but it should be unique within a dictionary. 

If you assign a created dictionary to a variable, then it is always mutable which means you can change it by adding, removing, or changing its items. But if you assign a dictionary to a constant, then that dictionary is immutable, and its size and contents cannot be changed.

_SYNTAX:_  
```swift
var someDict = [Int: String]()
```

_EXAMPLE:_  
```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
```


### Sequence Based Initialization

Swift 4 allows you to create Dictionary from arrays (Key-Value Pairs.)
```swift
var cities = ["Delhi","Bangalore","Hyderabad"]
```

You can use the following simple syntax to create an empty dictionary whose key will be of Int type and the associated values will be strings −
```swift
var Distance = [2000,10, 620]
```

Here is an example to create a dictionary from a set of given values −
```swift
let cityDistanceDict = Dictionary(uniqueKeysWithValues: zip(cities, Distance))
```

The above lines of code will create a dictionary with Cities as key and Distance as Value

### Filtering

Swift 4 allows you to filter values from a dictionary.
```swift
var closeCities = cityDistanceDict.filter { $0.value < 1000 }
```

If we run the above code our closeCities Dictionary will be.

_OUTPUT:_  

    ["Bangalore" : 10 , "Hyderabad" : 620]

### Dictionary Grouping

Swift 4 allows you to create grouping of Dictionary values.
```swift
var cities = ["Delhi","Bangalore","Hyderabad","Dehradun","Bihar"]
```

You can use the following simple syntax to group the values of dictionary according to first alphabet.
```swift
var GroupedCities = Dictionary(grouping: cities ) { $0.first! }
```

The result of above code will be

_OUTPUT:_  
```swift
["D" :["Delhi","Dehradun"], "B" : ["Bengaluru","Bihar"], "H" : ["Hyderabad"]]
```

### Accessing & Modifying Dictionaries

You can use `updateValue(forKey:)` method to add an existing value to a given key of the dictionary. This method returns an optional value of the dictionary's value type. Here is a simple example −  
```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
var oldVal = someDict.updateValue("New value of one", forKey: 1)
var someVar = someDict[1]

print( "Old value of key = 1 is \(oldVal)" )
print( "Value of key = 1 is \(someVar)" )
print( "Value of key = 2 is \(someDict[2])" )
print( "Value of key = 3 is \(someDict[3])" )
```

Or you may do like this as well.. both produces the same output  
```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
var oldVal = someDict[1]
someDict[1] = "New value of one"
var someVar = someDict[1]

print( "Old value of key = 1 is \(oldVal)" )
print( "Value of key = 1 is \(someVar)" )
print( "Value of key = 2 is \(someDict[2])" )
print( "Value of key = 3 is \(someDict[3])" )
```

_OUTPUT:_  
```swift
Old value of key = 1 is Optional("One")
Value of key = 1 is Optional("New value of one")
Value of key = 2 is Optional("Two")
Value of key = 3 is Optional("Three")
```

### Remove Key-Value Pairs

You can use removeValueForKey() method to remove a key-value pair from a dictionary. This method removes the key-value pair if it exists and returns the removed value, or returns nil if no value existed. Here is a simple example −
```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]

var removedValue = someDict.removeValue(forKey: 2)
// or you may just set the value to nil.. both works..  
// someDict[2] = nil

print( "Value of key = 1 is \(someDict[1])" )
print( "Value of key = 2 is \(someDict[2])" )
print( "Value of key = 3 is \(someDict[3])" )
```

_OUTPUT:_  
```swift
Value of key = 1 is Optional("One")
Value of key = 2 is nil
Value of key = 3 is Optional("Three")
```

### Iterating Over a Dictionary

You can use `enumerate()` function which returns the index of the item along with its (key, value) pair as shown below in the example −  
```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
for (key, value) in someDict.enumerated() {
    print("Dictionary key \(key) - Dictionary value \(value)")
}
```

_OUTPUT:_  
```swift
Dictionary key 0 - Dictionary value (key: 2, value: "Two")
Dictionary key 1 - Dictionary value (key: 3, value: "Three")
Dictionary key 2 - Dictionary value (key: 1, value: "One")
```

### Convert to Arrays

You can extract a list of key-value pairs from a given dictionary to build separate arrays for both keys and values. Here is an example  
```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]

let dictKeys = [Int](someDict.keys)
let dictValues = [String](someDict.values)

print("Print Dictionary Keys")

for (key) in dictKeys {
    print("\(key)")
}
print("Print Dictionary Values")

for (value) in dictValues {
    print("\(value)")
}
```

_OUTPUT:_

    Print Dictionary Keys
    2
    3
    1
    Print Dictionary Values
    Two
    Three
    One

____
`count` property of a dictionary to find out the number of items in a dictionary +
`empty` property of a dictionary to find out whether a dictionary is empty or not
____

