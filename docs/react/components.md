---
id: components
title: Components - Overview
sidebar_label: Components
---

## Components

> Wrapping html elements with <React.Fragment> would not create additional `<div>` tags

### State

State is a special property in React that contains any data that the component needs

#### Object destructuring

```js
formatCount() {
    return this.state.count === 0 ? 'Zero' : this.state.count;
}

//this function code can be destructured as like below
formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
}

// We can return JSX as below since it can be considered as JS objects
// that can be returned and even passed as an argument to function
formatCount() {
    const { count } = this.state;
    return count === 0 ? <h2>Zero</h2> : count;
}
```

### Using Styles

Sample usage of styles in react component is here..

<!--DOCUSAURUS_CODE_TABS-->

<!--Approach - 1-->

```js
class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={styles}>Hello World!</span>
        { // Or you may use inline styles like this.. }
        <span style={{ fontSize: 20 }}>Welcome!</span>
      </div>
    );
  }
}
```

<!--Approach - 2 -->

```js
// import a style sheet and use the classes in the elements
// here the class attribute is already reserved.. so we can use 'className'
class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span className="font-bold text-info">Hello World!</span>
      </div>
    );
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

### List

Below sample would render a list with items specified in the array

<!--DOCUSAURUS_CODE_TABS-->

<!--Rendering List-->

```js
class Counter extends Component {
  state = {
    lst: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <ul>
          {this.state.lst.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

<!--Conditional Rendering - 1-->

```js
class Counter extends Component {
  state = {
    //lst: []
    lst: ["tag1", "tag2", "tag3"]
  };

  renderList() {
    if (this.state.lst.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.lst.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        {this.renderList()}
      </div>
    );
  }
}
```

<!--Conditional Rendering - 2-->

> If `&&` operator used between boolean and string then it will return the string..  
>  For example:  
> `true && 'Hi'` returns `'Hi'`  
> `true && 'Hi' && 1` returns `1`

```js
class Counter extends Component {
  state = {
    lst: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        {this.state.lst.length === 0 && "Please create a new tag!"}
        <ul>
          {this.state.lst.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

### Events

Sample event

```js
class Counter extends Component {
  handleClick() {
    console.log("Action button clicked");
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onClick={this.handleClick}>Action</button>
      </div>
    );
  }
}
```

### 'this' access

<!--DOCUSAURUS_CODE_TABS-->
<!-- Summary -->
<br/>
In Javascript 'this' refers different objects according to the place it is called.. for example..

- If `this` is called in `obj.method()` then it denotes the object reference..
- If `this` is called in `function()` (stand-alone) then it denotes the `window` object reference.. also if `strict mode` is enabled then it returns `undefined`

> In the above event handler code we cannot use `this` within the `handleClick` function.. We will have to use `bind` method or `arrow` function to utilize `this` functionality in the event.. Sample code in other tabs

<!--Code sample - bind -->

```js
class Counter extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Action button clicked", this);
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button onClick={this.handleClick}>Action</button>
      </div>
    );
  }
}
```

<!--Code sample - arrow -->

However the `bind` approach can be replaced with `arrow` function since arrow inherites `this` keyword be dafult.

```js
class Counter extends Component {
  handleClick = () => {
    console.log("Action button clicked", this);
  };

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>
        <button onClick={this.handleClick}>Action</button>
      </div>
    );
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Updating State

<!--DOCUSAURUS_CODE_TABS-->
<!-- Info -->
<br/>

You cant update the state just like that with `this.state.count++` kinda methods.  
**So how do we update the state?** `setState` method is the way forward to update `state` object content.

W**hat happens when the state is updated?** - Well! once the state is updated the virtual DOM is also getting updated. Then React compares it with original DOM and just update the particular change in the original DOM.

<!--Code Sample-->

```js
class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Handling event arguments

<!--DOCUSAURUS_CODE_TABS-->
<!-- Info -->
<br/>

**How do we pass arguments to our event?** - As we know that the `onClick` attribute in button element only accepts the function reference.. so we cannot pass the argument in the existing code as like below..

```js
// this approach FAILS

handleIncrement = product => {
  ...
}
...
...
<button onClick="{this.handleIncrement({id: 1})}">Increment</button>
```

To fix this we need another helper method with which the target function can be called with the parameter.. Find the code in `tab2`..

Even this approach can be simplified by using arrow function. Check the `third tab`.

<!--Helper Function-->

```jsx
class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log(product);
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.doHandleIncrement}>Increment</button>
      </div>
    );
  }
}
```

<!--Solved with Arrow Function-->

```jsx
class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log(product);
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.handleIncrement({ id: 2 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

### Vidly Project

<!--DOCUSAURUS_CODE_TABS-->

<!--Info -->

<br/>
Its a sample project build as part of React learning.

This project shows a page with list of movies along with 'delete' button to remove individual items.

Basic project setup goes like this.. Check out the source code in the `next tabs`

```
$ npx create-react-app vidly
$ cd vidly
$ npm i bootstrap@4.1.1 font-awesome@4.7.0
```

<!-- Index.js -->

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

<!-- App.js -->

```js
import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <Movies />
    </main>
  );
}

export default App;
```

<!-- Movies.jsx -->

```jsx
import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/MovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = id => {
    console.log("Moview deleted (" + id + ")");
    deleteMovie(id);
    this.setState({
      movies: getMovies()
    });
  };

  render() {
    if (this.state.movies.length == 0) {
      return (
        <h3 className="text-warning">There are no movies in the database</h3>
      );
    } else {
      return (
        <React.Fragment>
          <h3>Showing {this.state.movies.length} movies in the database</h3>
          <table className="table">
            <thead>
              <tr className="font-weight-bold">
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name} </td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }
}

export default Movies;
```

<!-- MovieService.js -->

```js
const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getMovies() {
  return movies;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Composing Components

### Pass Data (Props)

<!--DOCUSAURUS_CODE_TABS-->
<!--Info -->
<br/>
React has a special property called `props` to pass data between components..  
Check out the sample code in the next tab for full demonstration on using `props`..

<!--counter.jsx -->

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  handleDecrement = () => {
    if (this.state.value === 0) return;
    this.setState({
      value: this.state.value - 1
    });
  };

  formatCount = () => {
    const { value } = this.state;
    return this.state.value === 0 ? "Zero" : value;
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
```

<!--counters.jsx -->

```jsx
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div className="container">
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### Pass Complex Data

At time we may need to pass complex elements to child components.. so in that situation we can use `props.children` facility to pass such data..

For example:

```
<div className="container">
  {this.state.counters.map(counter => (
  <Counter key="{counter.id}" value="{counter.value}">
    <h4>Counter #{counter.id}</h4>
  </Counter>
  ))}
</div>

// this can be used via props.children facility..

render() {
  return (
    <div>
      {this.props.children}
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick="{this.handleIncrement}"
      >
        Increment
      </button>
    </div>
  )
}
```

### React Debugging

`React Developer Tools` is a popular debugging tool used to debug React app.

Once this is installed, the developer tools would be equipped with couple more tabs for React app(like Components, Profiles etc..)

It allows us to see each component and their associated `props` and `state` values..

#### Usage of \$r

`$r` is used to get the reference of the component that is selected in `component` tab.. For example if you enter `$r` in 'console' tab then you would get the particular component's properties and literals displayed on the screen..

You may even call its methods.. like

```
$r.render()
$0.click()
```

### State Vs Props

`state` is local to the component.. other components cant access that.. where as `props` is set from other components..

`props` is read only.. whereas `state` is not..

### Raise and Handle Events

<!--DOCUSAURUS_CODE_TABS-->
<!--Info-->
<br/>
> Rule of thumb: The component that owns a piece of the state, should be the one modifying it.

Sometimes we want to trigger an event in parent component from child component. This can be done by raising the event in child component and handling it in parent component via `props`

Check the examples in next tabs.

#### Minor bit of Code improvement:

```
<Counter
  key={counter.id}
  id={counter.id}
  value={counter.value}
  onDelete={this.handleDelete}
></Counter>

// This code can be improved by passing the object itself instead of individual property..

<Counter
  key={counter.id}
  onDelete={this.handleDelete}
  counter={counter}
></Counter>

```

<!--counters.jsx-->

```jsx
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}
```

<!--counter.jsx-->

```jsx
class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  handleDecrement = () => {
    if (this.state.value === 0) return;
    this.setState({
      value: this.state.value - 1
    });
  };

  formatCount = () => {
    const { value } = this.state;
    return this.state.value === 0 ? "Zero" : value;
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Single Source of Truth

<!--DOCUSAURUS_CODE_TABS-->
<!--Info-->
<br/>
Changing the `state' of one component might not affect the other component since the state values are local to that component.. So if we want to update certain state value in parent component that should also be changed in child component then we should remove the local state..

This kind of a component is called controlled component which does not have its own local state..

Find the sample demonstration code along with reset feature code in the next tabs

<!--counters.jsx-->

```jsx
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  resetCounter = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };
  render() {
    return (
      <div className="container">
        <button
          onClick={this.resetCounter}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}
```

<!--counter.jsx-->

```jsx
class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return this.props.counter.value === 0 ? "Zero" : value;
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Lifting the State

Leveling up the state to include navbar..

<!--DOCUSAURUS_CODE_TABS-->
<!--Info-->
<br/>

Find the example here to see the app which is leveled up with app.js and navbar..

<!--app.js-->

```js
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  resetCounter = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log(counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.resetCounter}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}
```

<!--navbar.jsx-->

```jsx
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-secondary badge-pill">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
```

<!--counters.jsx-->

```jsx
class Counters extends Component {
  render() {
    return (
      <div className="container">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}
```

<!--counter.jsx-->

```jsx
class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return this.props.counter.value === 0 ? "Zero" : value;
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Stateless Functional Component

If a component does not use state then we can define it with a function. For example

```jsx
import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-secondary badge-pill">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
```

We can even optimize the code further by deleting this.props and reference the properties in single line of code as like below..

```
const { onReset, counters, onDelete, onIncrement } = this.props;
```

---

### Lifecycle hooks

There are three phases..

**MOUNT :**

- constructor
  - right place to initialise the properties
- render
- componentDidMount
  - this is called after the component rendered into the DOM.. perfect place to make ajax call..
  - also setState can be called here..

> We cant use lifecycle hooks in stateless functional components

**UPDATE :**

- render
- componentDidUpdate
  - This event would be called if the props or states are updated.. we can even make ajax calls based on the data change.. this function would allow us to access previous state and props via `prevProps`, `prevState` references.

**UNMOUNT :**

- componentWillUnmount
  - This will be called when the component is removed from the DOM. This method is a perfect place to keep the clean-up code.

**So based on above project the order of events would be..**

- App - constructor
- App - Rendered
- NavBar - Rendered
- Counters - Rendered
  - Counter - Rendered (4 times)
- App Mounted

**Also when the `increment` button is clicked the events sequence would be :**

- App - Rendered
- NavBar - Rendered
- Counters - Rendered
- Counter - Rendered (4 times)

Within the constructor we dont need to call setState.. instead we can call like this..

```
this.state = this.props.something;
```
