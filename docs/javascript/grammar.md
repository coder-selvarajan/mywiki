---
id: grammar
title: Javascript Grammar
sidebar_label: Grammar
---

> Notes collected from JavascriptGrammar Book - II and Wes Bos video tutorials.

Some of the modern features used commonly:
- rest, spread, arrow function, template strings, destructuring
- higher order functions (map, reduce, filter)


### Anonymous function:

Founction without a name is called annonymous function. For example..

```js
setTimeout(function() { console.log('You time is up'); }, 2000);
```

### Chrome Console

Apart from console.log there are other useful functions.

- copy(obj)
    - this copies the object to copy buffer.

- console.dir(obj)
    - It prints all the properties and methods of an object or a DOM element as well.

- console.table(obj)
    - This displays the object with its data in a tabular format

- console.error("..")
    - It prints the error in console. It also generates the stack trace.

- console.time() & console.timeEnd()
    - You can track the amount of time between function calls. This can be helpful when optimizing code:

```js
console.time();
for(...) {
    ...
    ...
}
console.timeEnd();
```

---

## Basics

### Entry point

You can start writing your code directly into `<script>` tags. But this means it will be executed instantly and simultaneously as the script is being downloaded into the browser, without concern for DOM or other media.

This can create a problem because your code might be accessing DOM elements before they are fully downloaded from the server.

To remedy the situation, you may want to wait until the DOM tree is fully available.

To wait on the DOM event, add an event listener to the document object. The name of the event is `DOMContentLoaded`.

> Do not write your code just in `<script>` tags, without entry point function.

> Do make your program entry point either **DOMContentLoaded**, **readyState** or the native **window.onload** method for waiting on media depending on whether you need to wait for just the DOM or the rest of media.

For added safety you might also check the value of readyState property before attaching the DOMContentLoaded event :

```js
...
function load(){
    console.log("dom loaded");
}

if (document.readyState == "loading") {
    document.addEventListener("DOM Content Loaded", load);
} else {
    load();
}
...
```

With window.onload method, you can wait until all images and similar media have been fully downloaded.

---

### Import / Export

Starting from ES6 we should use import (and export) keyword to import variables, functions and classes from an external file.

```js
export function Mouse() {
    this.x = 0;
    this.y = 0;
}

// OR

function Keyboard() {
    ...
    ...
}

export { Keyboard }
```

In order to export the Mouse class and start using it in the application, we must make sure the script tag’s type attribute is changed to ”module” (this is required.)

```js
<script type="module"> 
    import { Mouse } from './mouse.js';
    let mouse = new Mouse();
</script>
```

Dynamic import `ES10`

```js
element.addEventListener('click', async () => {
    const module = await import('./click.js');
    module.clickEvent();
});
```

---

### Strict Mode

This strict context prevents certain actions from being taken and throws an exception.

For example, in strict mode you cannot use undeclared variables. Without strict mode, using an undeclared variable will automatically create that variable.

```js
"use strict"; 

var variableA = 1;
delete variableA;
```

Without `use strict` the code won't create any error. But the above code would create `SyntaxError`..

<span style="color:red">`Uncaught SyntaxError: ...`</span>

---

### Variables

#### Literal values

| value     |  typeof     | constructor |
|-----------|:-----------:|-----------:|
| 1         |  'number'    | Number()   |
| 3.14      |  'number'    | Number()   |
| some text |  'string'    | String()   |
| []        |  'object'    | Array()    |
| {}        |  'object'    | Object()   |
| true      |  'boolean'   | Boolean()  |
| f f() {}  |  'function'  | Function() |

The typeof function can be used to determine type of the literal. For exam- ple typeof 1 will return string "number". 

It’s a bit unfortunate that there is no "array" (you will get "object" instead), but there is a classic workaround. To check if a value is an array, check if its typeof returns "object", but also check for presence of length property – because it exists only on objects of type Array.

![Variables](assets/js/variables.png)

#### Dynamic Typing

JavaScript is a dynamically-typed language. It means that variables created using var or let keywords can be dynamically re-assigned to a value of another type at some point later in your JavaScript program.
In statically-typed languages doing that would generate an error.


### Value by reference

By default JavaScript passing value by reference. 

JavaScript assigns values by reference without actually making a copy of the original value. 

`var` latches onto window/this object, let and const don’t

In global scope this reference points to instance of window object / global context.

When variables are defined using var keyword they become attached to window object, but variables defined using let (and const) are not.

---

### Var / Let / Const

- **Var** 
    - is used to define a variable in function/global scope
    - Allow redeclaration
- **Let** 
    - is similar to Var.. but it is block scoped(for ex: if block, while block.. etc)
    - Also it does nt allow redeclaration.
- **Const** 
    - is similar to Let.. but you cannot reassign value.

> Object.freeze - prevents the object properties to be updated. 

#### Variable leaking

Variable leaking is a serious issue while working with multiple libraries. If we are declaring and using some common named variable which is already available in global scope or in other library then we end up changing the value of it. To avoid this we need to scope our code with immediate function.. for example..

```js
(function(){
    var name = "ST";
    console.log(name);
})();
```

Where as this problem can easily by address in `let, const` with minimal syntax `{}`. For example..

```js
{
    let name = "ST";
    console.log(name);
}
```

#### Var and let in for loop

<!--DOCUSAURUS_CODE_TABS-->
<!--Var-->
```js
for(var i = 0; i<10; i++){
    console.log(i);
    setTimeout(function(){
        console.log("The number is = " + i);
    }, 1000);
}
```

> Here the result of setTimeout is 10 for all the occurance, since the i is in global scope

<!--Let-->

```js
for(let i = 0; i<10; i++){
    console.log(i);
    setTimeout(function(){
        console.log("The number is = " + i);
    }, 1000);
}
```

> Here we get the expected result.. the first console log and the setTimeout console log would print the same numbers. 
<!--END_DOCUSAURUS_CODE_TABS-->

## Arrow Function

Arrow function is always an anonymous function.. 

<!--DOCUSAURUS_CODE_TABS-->
<!--Arrow usage-->

```js
const names = ['wes', 'kait', 'lux'];

// normal function
const fullNames = names.map(function(name) {
    return `${name} bos`;
});

// arrow function 
const fullNames2 = names.map((name) => {
    return `${name} bos`;
});

// arrow function - with no branckets for single argument
const fullNames3 = names.map(name => {
    return `${name} bos`;
});

// arrow function - with no return keyword for single code line
const fullNames4 = names.map(name => `${name} bos`);

// arrow function - with no arguments
const fullNames5 = names.map(() => `cool bos`);

// arrow function is assigned to a variable
const sayMyName = (name) => {
    alert(`Hello ${name}!`)
}

sayMyName('Wes');
```

<!--Example 2-->

```js
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

const ages = [23,62,45,234,2,62,234,62,34];
const old = ages.filter(age => age >= 60);
console.log(old);
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Template Strings

## Destructuring

## Iterables & Looping

## Array improvements

## ...Spread and ...Rest

## Object Literal 

## Promises

## Symbols

## Classes

## Generators

## Proxies 

## Sets and Weaksets

## Map and Weakmap

## Async + Await Flow Control

