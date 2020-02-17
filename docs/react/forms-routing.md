---
id: forms-routing
title: Forms, Routing Etc
sidebar_label: Forms Routing
---

## Pagination, Filtering, Sorting

- `loadash` is a package to generate arrays
- `prop-types` package is used to check the types

## Routing

- Install `Auto-import - ES6, TS, JSX, TSX` plugin to vs code

- Install `react-router-dom` npm package

- BrowserRouting tag in index.js
- Route tag in app.js

```jsx
<Route path="/products" component={Products} />
```

- To pass props to component with Route tag

```jsx
<Route
  path="/products"
  render={props => <Products sortBy="newest" {...props} />}
/>
```

- To pass parameters in the path

```jsx
<Route path="/products/:id" component={ProductDetails}>
```

- To access this route param in component we have to use `this.props.match.params.id}`
- Optional Route parameters

```jsx
<Route path="/posts/:year?/:month?" component={Posts}>
```

- Switch tag to match the exact path..
- To make the app SPA change all the <a> tag with `link` tags..

- Install the opular QueryString npm package..

  - npm i query-string@6.1.0

- Redirect, notfound pages
- Programmatic navigation
- Nested Routing
- NavLink component

## Forms
