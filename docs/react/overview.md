---
id: overview
title: React JS - Overview
sidebar_label: Overview
---

Popular framework in todays time

#### Essential Parts 
- Components
- Prop
- State

## Components (a piece of the UI)

- A page is build with multiple reusable components.. 
- Sample code 
```js 
class tweet extends Component {
    state = {};
    render() {
        return(
        <h2>Hello World!</h2>
        )
    }
}
```

- React keeps the light weight representation of DOM element in memory - called Virtual DOM
    - It avoids the tedious dom manipulation code in JS

## Dev Env Setup

- Install NodeJS
- Install ReactJS via npm
    - $ npm install -g create-react-app@1.5.2
- Install VS Code Editor
- Install these two extensions in VS Code
    - Simple React Snippets
    - Prettier
- Create react app with this command.
    - $ create-react-app react-app1
- Above command would install react along with other tools like
    - Light weight development server
    - Webpack
    - Babel
	
## ES6 Essentials

- Let/Const
- Objects
- this 
- Arrow Funcs
- Destructuring
- Spread
- Classes 
- Modules 

