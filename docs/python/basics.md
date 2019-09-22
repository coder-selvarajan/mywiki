---
id: basics
title: Python Basics
---

Python is a general-purpose interpreted, interactive, object-oriented, and high-level programming language.

It is used for:

- Web development (server-side),
- Software development,
- Machine Learning & Mathematics, 
- System scripting.

## Variables

**Int**
```python
    one = 1
    two = 2
```

**Decimal** 
```python
    dem = 1.1
```

**String**
```python
    strval = "Hello"
```


TIP: Variables declared in function are called Local Variable. All other variables are Global variables. 

Global vars can be accessed within the function. 

---

## Functions

**Funtion definition:**
```python
    def addNum(one, two):
        return one + two
```

**Function call:**
```python
    addNum(4,5)
```

> `print("Hello" * 5)` this code prints `HelloHelloHelloHelloHello`

---

## IF Statement

Boolean values : `True, False`

**Sample if statement**
```python
    if click == True and control == "Button":
        print("Button Clicked")
    elif control == "Radio":
        print("Radio button selected")
    else 
        print("No interaction")
```

---

## Lists

Lists are used to store the collection of elements of any type

**General structure of list**
```python
    Testlist = ["a", "b", "c"]
    scores = [60, 75, 70, 80, 90]
```


The indexing of the list(for ex: scores) goes in two ways.  
one is `0,1,2,3,4` and another one is `-5,-4,-3,-2,-1`  
```python
    print(scores[4])
    print(scores[-1]) 
    # both these statements print 90 
    print(scores[-5]) # prints: 60
```


     +---+---+---+---+---+---+
     | P | y | t | h | o | n |
     +---+---+---+---+---+---+
     0   1   2   3   4   5   6
    -6  -5  -4  -3  -2  -1


**Some more notation**
```python
    print(scores[0:2])  # prints: 60, 75
    print(scores[1:3])  # prints: 75, 70
    print(scores[2:])   # prints: 70, 80, 90
```


**To change the value in a list:**
```python
    scores[1] = 35
    print(scores)  # prints: 60, 35, 70, 80, 90
```


**To remove/update items from list**
```python
    scores[1:3] = []
    print(scores)  # prints: 60, 80, 90
    # update: 
    scores[2] = []
    print(scores) # prints: 60, 75, [], 80, 90
    # list with in list
    scores[2] = ["A", "B"]
    print(scores) # prints: 60, 75, ["A", "B"], 80, 90
    print(scores[2][1])  # prints: "B"
```


**Append the list**
```python
    scores.append(82)
    print(scores) # prints: 60, 75, 70, 80, 90, 82
```


---
## Loops

### For Loop:

**For Loop on string:**  
```python
    word = "Hello"
    for w in word:
        print(w) # prints:  H  e  l  l  o
```


**For loop on list:**  
```python
    numbers = [1,2,3,4,5]
    for n in numbers
        print(n) # prints: 1  2  3  4  5
```


**For loop on range:**  
```python
    numlist = []
    for n in range(10)    
        print(n)            ## prints 0...9 
        numlist.append(n)   ## adds numbers to a list
    # range(start, stop, step)
    for k in range(-1, -6, -2)
        print(k)    # prints: -1  -3  -5
```

range(5) - outputs 0, 1, 2, 3, 4

### While loop 

**While loop sample:**

```python
    c = 1
    while (c<=10):
        print(c)  
        c = c + 1
    # Results: 1 ... 10

    letters = ["a", "b", "c"]
    i = 0
    while (i<len(letters)):
        print(letters[i])  
        i += 1
    # Results: a  b  c
```


### Breaking and Continuing in Loops

**Break statement sample:**
```python
    members = ["A", "B", "C", "D"]
    for i in range(len(members)):
        if members[i] == "C":
            break
    print(i+1) #prints: 3
```


**Continue statement sample:**
```python
    for k in range(10):
        print(k)
        if k%3 == 0:
            print("Divided by 3")
            continue
        print("Not divided by 3")
```

> Tricky Question & Answer for reference

```python
    f = 1
    A = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    for i in range(0, 3):
        f =f*i
        for j in range(0, 3):
            A[i][j] = f
    print(A)
```

> Answer is: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

---

## Dictionaries and Sets

### Sets

**Sample sets code:** Set removes the duplicates by default

```python
    age = {"24", "35", "25", "35", "56"}
    print(age) # prints: {'24', '25', '56', '35'}
```

**Convert from list:**

    nums = set([7,7,1,3,4,5,5,2])
    print(len(nums)) #prints: 6


Way to check if an element exist in the set:

```python
    if "25" in age
        print("People with age 25 attending")
```


**Another sample:**

```python
    CountryList = []
    for i in range(5):
        Country = input("Please Enter your Country: ")
        CountryList.append(Country)
    CountrySet = set(CountryList)
    print(CountryList)
    print(CountrySet)
```

The result would be :  

    Please Enter your Country: "US"
    Please Enter your Country: "UK"
    Please Enter your Country: "US"
    Please Enter your Country: "INDIA"
    Please Enter your Country: "UK"
    ['US', 'UK', 'US', 'INDIA', 'UK']
    set(['INDIA', 'UK', 'US'])

### Dictionary

Dictionary will be in key value pair. Thats the difference with Sets

**Format:**  
```python
    Dictionary = {"key":"value","key2":"value2","key3":"value3"}
```

**Sample code:**  
```python
    CountryList = []
    for i in range(5):
        Country = input("Please Enter your Country: ")
        CountryList.append(Country)

    CountryDict = {}
    for Country in CountryList:
        if Country in CountryDict:
            CountryDict[Country] += 1
        else:
            CountryDict[Country] = 1
    print(CountryDict)
```

The result would be:  

    Please Enter your Country: "US"
    Please Enter your Country: "France"
    Please Enter your Country: "India"
    Please Enter your Country: "France"
    Please Enter your Country: "US"
    {'India': 1, 'US': 2, 'France': 2}

Dictionary keys can be in different types - sample code:  
```python
    dict = {}
    dict[1] = 2
    dict['1'] = 4
    dict[1] += 2
    count = 0

    print(dict) #prints: {'1': 4, 1: 4} 
```

List inside Set is not allowed:  
```python
    l = [1,2,3,[4,5]] #it is allowed
    s = {1,2,3,[4,5]} #this throws an error
```

> Accessing an unspecified index in a ‘list’ will produce an error while doing so the same in ‘dictionary’ will produce a new key

---

## Input and Output

**Input**
```python
    age = int(input("Enter age: "))
    print(age)

    # another sample 
    Scores = []
    for i in range(5):
        curscore = float(input("Enter the score" + str(i) + " : "))
        Scores.append(curscore)
    print(Scores) 
    # Result: Printing 5 decimal scores entered by the user
```

**Output**

Both the statements below output the same text
```python
    print("The score you entered: "+str(curscore)+" good") 
    print("The score you entered:",curscore,"good") 
```

> Note the usage of `,` in print statement. It also adds an extra space

`\n` in print statement adds new line
```python
    print("The score is:\n" + str(curscore))
```

---

## File I/O

Syntax: 
```python
    file = open("filename", "r") # "r", "w", "a", "r+" -> Read and Write
    # file operations
    file.close()
```

**Read / Write**

Example code for file read/write:  
```python
    vacationspots = ["Singapore", "Bali", "Europe", "USA", "Srilanka"]

    vfile = open("VacationPlaces", "w")
    for spot in vacationspots:
        vfile.write(spot + "\n")
    vfile.close

    vfile = open("VacationPlaces", "r")
    print(vfile.read()) # to print whole file content
    # To print file content line by line
    for line in vfile:
        print(line, end="")

    vfile.close
```

To read single line from file, use this code  
```python
    firstline = vfile.readline()
    print(firstline)
```

This will change the position of the pointer.  
For ex: if you execute read() code after this line, then it will print from the last position only.  
```python
    print(vfile.readline())
    print(vfile.read())

    # Output
    Singapore

    Bali
    Europe
    USA
    Srilanka
```

**Append**

```python
    finalspot = "Tailand"
    vfile = open("VacationPlaces", "a")
    vfile.write(finalspot)
    vfile.close
```

**With keyword :**

With block would automatically close the file once the end of block is reached. 

```python
    with open("VacationPlaces", "r") as vfile:
        for line in vfile:
            print(line)
```

> to color terminal texts use `termcolor` package - https://pypi.org/project/termcolor/

---

## Classes

Introductions to classes

Syntax:  
```python
    class className:
        def __init__(self):
            self.attribute1 = 0
        
        def anotherfunc(self):
            actions(a)

```

* `self` has to be added in each function of the class. that refers the class itself
* `__init__` function refers the constructor of the class

Sample class code:  
```python
    class Team:
        def __init__(self):
            self.TeamName = "NaN"
            self.TeamOrigin = "NaN"

        def DefineTeamName(self, name):
            self.TeamName = name

    TeamA = Team()
    print(TeamA.TeamName)   # prints "NaN"
    TeamA.DefineTeamName("Tiger")
    print(TeamA.TeamName)   # prints "Tiger"
```

*Default value:*  
```python
    class Team:
        def __init__(self, Name="Name", Origin="Origin"):
            self.TeamName = Name
            self.TeamOrigin = Origin


    TeamA = Team()
    print(TeamA.TeamName)   # prints "Name"

    TeamB = Team("Cheetah")
    print(TeamB.TeamName)   # prints "Cheetah"
```

### Class Inheritance / Concrete class

*Syntax :  
```python
    class InheritanceClass(ParentClass):
        def __init__(self, input1, input2):
            ParentClass.__init__(self)
            self.attribute1 = input1
            self.attribute2 = input2
```

**Sample code :**  
```python
    class Team:
        def __init__(self, Name="CSK", Origin="TN"):
            self.TeamName = Name
            self.TeamOrigin = Origin

    class Player(Team):
        def __init__(self):
            Team.__init__(self)
            self.PlayerName = "NaN"
            self.Score = 0

        def setName(self, name):
            self.PlayerName = name

        def __str__(self):
            return "Team - " + self.TeamName + \
                " has player '" + self.PlayerName + "'"

    PlayerA = Player()
    PlayerA.setName("Dhoni")
    print(PlayerA.PlayerName) 
    print(PlayerA.Score)     
    print(PlayerA.TeamName)  
    print(PlayerA.TeamOrigin)
    print(PlayerA)  # Prints the string from '__str__' function

```

_OUTPUT:_  
```python
    Dhoni
    0
    CSK
    TN
    Team - CSK has player 'Dhoni'


    __str__ function returns something when the object is printed
```

**Practical scenario of using classes**

* Pets    = Base class  
    * name, age, hunger

* Dog     = Concrete class inherits Pets  
    * base attributes + breed, favoriteToy

* Cat     = Concrete class inherits Pets  
    * base attributes + place 

* Humans   = Base class  
    * name, pets
    * dog and cat objects are created and passed to human class as list.


```python
    class Human:
        def __init__(self, name, pets):
            self.name = name
            self.pets = pets

    PetLover = Human("Alice", [husky_dog, typical_cat])
    print(PetLover.pets[1].name + " - " + str(PetLover.pets[1].age))
```

---

## Importing

_SYNTAX:_  

    import package_name

_SAMPLE:_   
```python
    import random

    randInt = random.randint(0, 10) 
    print(randInt)      # Integer : 0 >= N <= 10
    randFloat = random.random() 
    print(randFloat)    # Float : 0.0 >= N < 1.0
    randUniform = random.uniform(1, 50) 
    print(randUniform)  # Float : 1.0 >= N < 50.0
```


_OUTPUT:_

    2
    0.1554929844739973
    5.860057875357238

**User of Nick-name:* *

```python
    import random as r

    randInt = r.randint(0, 10) 
    print(randInt)
```


We could import everything from random package so that all the functions can be used without any prefix. However we will have to be careful about the name conflict with other packages.  

```python
    from random import *

    randInt = randint(0, 10) 
    print(randInt)
```

random package can work well with lists.. check out..

```python
    from random import *

    simplelist = [1,5,3,8,2,11]
    pickElement = r.choice(simplelist) 
    print(pickElement) # prints random pick from the list

    r.suffle(simplelist)
    print(simplelist) # now the element order is changed
```

