---
id: typescript-basics
title: Typescript Basics
sidebar_label: Typescript
---

## Overview

- Typescript is open source language from Microsoft.  
- Typed superset of Javascript.  
- Compiles down to plain Javascript.  
- Adds type support to javascript.  
- Optional static typing and type inference..
- Excellent IDE support..  
- Intellisence support(most valuable during development)..

### How to Install? 

Well! You just need to install NodeJS to get to the Typescript. Once npm is available then run this.. 
```
npm install -g typescript 
```

### How to Run?

First the typescript file(ts) has be compiled into `js` file and them by using `node` we can run the js file in terminal. 

```
tsc main.ts 
node main.js  
```

## Features 

### Declaration

**Datatypes:**  
- string
- number
- boolean
- null
- undenfined


**Format :**
```ts
let abc: string = "Welcome";
```

#### Embedded Expression
```ts
let name: string = 'Selvarajan';
let sentence: string = `My name is ${name}. I love Typescript`;
```
**Further samples:**  

```ts
let abc = "Selva"
abc = 10 //this will throw an error since abc is already declared as string

let xy : any = "Rajan"
xy = 100 // no error here.. bcoz xy can accept 'any' value

//similarly in objects
let myObject: any = {
    name: "Khan",
    age: 24,
    isSingle: true
}

myObject = {
    name: "King",
    age: 25,
    isMarried: false //again no error here.. since we have the object declared as any
}

```

### Array, Tuple, Enum

```ts
//Array 
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//Tuple 
let person1: [string, number, number] = ['Jack', 25, 25000];

//Enum
enum Color {Green, Red, Blue};
let c:Color = Color.Red;
console.log(c); // prints 1
// OR
enum Color {Green=5, Red, Blue};
let c:Color = Color.Red;
console.log(c); // prints 6
```

### Any type

Use any type if you are unsure about the value from a service. It is dynamically typed.

```ts
let rndValue: any = 10;
rndValue = true;
rndValue = 'Selva'; //NO Compiler error here
```

### Any Vs Unknown

With `any` type there will not be any errors even we call methods from the variable. But in unknown we can assign values but can not call methods or keys.. doing that would throw compilation errors.. for example

```ts
// NO ERRORs here
let myVar: any = 10;
console.log(myVar.name);
myVar();
myVar.toUpperCase();

//---------------------------------------------

// Compilation ERRORS will be thrown here
let myVar: unknown = 10;
console.log(myVar.name);    //ERROR
myVar();    // ERROR
myVar.toUpperCase();    // ERROR 
//To fix above line we have to modify as like below
(myVar as string).toUpperCase(); // NO ERROR here as we have converted the type

//---------------------------------------------

// The property access code can be fixed as like below
let myVar: unknown = 10;
// this function checks whether the object has name property
function hasName(obj: any): obj is { name : string } {
    return !!obj && 
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVar)) {
    console.log(myVar.name);
}
```


### Interface

```ts
interface IMyObject {
    name: string,
    age: number,
    isSingle: boolean
}

const myObject: IMyObject = {
    name: "King",
    age: 25,
    isSingle: true
    // If you add or remove any of the keys above then you will get into error since we have the interface in place.
}

//---------------------------------------------

// Optional paramter within interface
interface IMyObject {
    name: string,
    age?: number //so this is optional key
}

const myObject: IMyObject = {
    name: "King"
    //NO ERROR
}
```

### Custom type 

```ts
type AGES = 26 | 27 | 28;

let age: AGES;
age = 26;

age = 25; //ERROR here.. 25 is not defined in type declaration

// OR 
type AGES = boolean | undefined;
let age: AGES = true;
age = 25; //ERROR

```

### Export 

Just make sure to include export statement in each `ts` file.. otherwise the file will be considered as part of whole page script that includes other js ts files.. it eventually goes under global scope and sometimes the variable declaration might endup in error.. so including 'export' makes the ts file content under its own scope.. 

```ts
export {}

let message = 'Hello World';
console.log(message);
```

### Optional Vs Default

```ts
// Optional parameters
function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}

add(5, 10);
add(5);

// Default parameters
function add(num1: number, num2: number = 10): number {
    return num1 + num2;    
}

add(5, 12); // result : 17
add(5);     // result : 15
```

### Classes

As we all know that the traditional class is a blueprint of an object.. well! it applies to Typescript as well 😜 

```ts
class Employee {
    empName: string;

    constructor(name: string) {
        this.empName = name;
    }

    greet() {
        console.log(`Good morning ${this.empName}`);
    }
}

let emp = new Employee('Selvarajan');
emp.greet();

// inheritance
class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
}
let mgr = new Manager('Kumar');
mdr.greet(); //inheritance is taking place
```

### Access Modifiers

**Public** - Accessible everywhere  
**Private** - Accessible only within the class  
**Protected** - Accessible within the class and in derived classes  


## Useful Links

**Typescript vs Swift :**  
https://alhazmy13.github.io/swift-is-like-typescript/

