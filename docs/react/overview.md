---
id: overview
title: React JS - Overview
sidebar_label: Overview
---

Popular framework in todays time

#### Essential Parts

- Components
- Props
- State

## Components (a piece of the UI)

- A page is build with multiple reusable components..
- Sample code

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class tweet extends Component {
  state = {};
  render() {
    return <h2>Hello World!</h2>;
  }
}
```

> React keeps the light weight representation of DOM element in memory - called Virtual DOM. It avoids the tedious dom manipulation code in JS

Here the output of `render()` method is a React Element which is a simple plain javascript object(Virtual DOM) that maps with DOM element.

Simply changing the state of component makes neccessary changes in the DOM element.. we dont actually need to deal with DOM manipulation process with `document.querySelector()` kinda stuffs.

> React is only the library - it only takes care of rendering the view and making sure the view is in sync with the state.

---

## Dev Env Setup

- Install NodeJS
- Install ReactJS via npm

```
    npm install -g create-react-app@1.5.2
```

- Install VS Code Editor
- Install these two extensions in VS Code
  - Simple React Snippets
  - Prettier
- Create react app with this command.

```
// old approach
$ create-react-app my-app

// new approach
$ npx create-react-app my-app
```

- Above command would create react app along with other tools like

  - Light weight development server
  - Webpack (for bundling our files)
  - Babel (for JS compilation)
    - goto https://babeljs.io/repl and test some sample convertions

- To create react app and run it on browser

```
npx create-react-app my-app
cd my-app
npm start
```

This will launch app on port 3000..

## VS Code Tips

- Install Prettier extension and enable 'formatOnSave' option in VS Code settings
- To edit open and close tags concurrently - Select the tag and press Cmd+D / Ctrl+D and edit the text.. it will now edit both the tag texts

## Design Tips

If you are using images in your app and if you want random images to display you can just use 'picsum.photos' site..

For example: https://picsum.photos/200 - This will generate a random image with size 200x200

Its a Lorem Ipsum site for pictures..

### Hello World

```js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World!</h1>;
// this code gets converted as below by babeljs..

// var element = React.createElement("h1", null, "Hello World!");
// So for that reason only we need to import React object..

// Here element is 'React Element' which is part of virtual DOM..
// so to render this inside real DOM we need the 'ReactDOM' object imported..
// for example:
ReactDOM.render(element, document.getElementById("root"));
```

> **Custom Configs** - `npm run eject` to eject from all default configurations. This will allow you to manually set the configurations by yourself(for production sake). This change is permanent so dont do this unless you know what you are doing

---
