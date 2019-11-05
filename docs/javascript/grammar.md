---
id: grammar
title: Javascript Grammar
sidebar_label: Grammar
---

> Notes collected from JavascriptGrammar Book - II 

Some of the modern features used commonly:
- rest, spread, arrow function, template strings, destructuring
- higher order functions (map, reduce, filter)


#### Anonymous function:

Founction without a name is called annonymous function. For example..

```js
setTimeout(function() { console.log('You time is up'); }, 2000);
```

#### Chrome Console

Apart from console.log there are other useful functions.

- copy(obj)
    - this copies the object to copy buffer.

- console.dir(obj)
    - It prints all the properties and methods of an object or a DOM element as well.

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



