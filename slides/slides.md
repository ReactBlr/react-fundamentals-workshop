### React Fundamentals Workshop

Kiran Abburi

[@kiran_abburi](https://twitter.com/kiran_abburi)

---

### Setup

```
git clone https://github.com/ReactBangalore/react-fundamentals-workshop
cd exercises
npm install
npm start
```

---

### Create React App
* Starter kit for react
* Needn't worry about babel and webpack configuration

```
npm install -g create-react-app
create-react-app myapp
cd myapp
npm start
```

---

### React Hello world

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

---

### React Hello world

```
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, world!</h1>
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

---

### JSX
* JSX is syntax extension to JavaScript
* It looks like XML/HTML
* You can embed JSX in JavaScript code
```js
  const message = <div>Hello</div>
```

---

### JSX
* JSX is used in react to describe how UI should like
* Template language with all the power of JavaScript

---

### JSX Expressions
* JSX evaluates expressions in curly braces

```js
  <div>{1 + 1}</div>
  // Result
  <div>2</div>
```

---

### JSX Expressions
* Conditionals in expressions

```js
  <button>{isLoggedIn ? 'Logout' : 'Login'}</button>
```

---

### JSX Expressions
* Loops

```js
const fruitsData = ['Apple', 'Orange', 'Mango']
const fruitsList = (
  <ul>
    {fruitsData.map(fruit => <li>{fruit}</li>)}
  </ul>
)

```

---

### JSX Expressions
* Conditionals in attributes

```
  <button disabled={submitting}>Submit</button>
```

---

### JSX Expressions
* Finds variables in the scope

```
function Name(props) {
  return <div>{props.firstName} {props.lastName}</div>
}
Name({firstName: 'John', lastName: 'Doe'})

// Result
<div>John Doe</div>
```

---

### JSX and HTML differences
* Should use className instead of class

#### HTML
```
<div class='title'></div>
```

#### JSX
```
<div className='title'></div>
```

---

### JSX and HTML differences
* Should use camelCase for attribute names

#### HTML
```
<div tabindex="1"></div>
```

#### JSX
```
<div tabIndex="1"></div>
```

---

### JSX and HTML differences
* Should use htmlFor instead of for

#### HTML
```
<label for='male'>Male</label>
```

#### JSX
```
<label htmlFor='male'>Male</label>
```

---

### JSX and HTML differences
* Style should be an object with camelCased properties rather than a CSS string.

#### HTML
```
<div style='font-size:10px'><div>
```

#### JSX
```
<div style={{fontSize:10}}><div>
```

---

### JSX and HTML differences
* Regular style properties start with lowercase
* Vendor prefixed style properties start with capital letter

```
<div
  style={{
    transform: 'rotate(30deg)',
    WebkitTransform: 'rotate(30deg)'
  }}></div>
```

---

### JSX and HTML differences
* Should always have a self-closing tags

#### HTML
```
<hr >
<input type="text">
```

#### JSX
```
<hr />
<input type="text" />
```

---

### JSX and HTML differences
* Events should be camel-cased
* Event handlers should be function references

#### HTML
```
<button onclick="clickHandler()">Click me</button>
```

#### JSX
```
<button onClick={clickHandler}>Click me</button>
```

---

### JSX to JS
* JSX should be compiled to JS to run in browser
* Tools like babel can compile JSX to JS

```js
  const message = <h1>Hello</h1>
```

compiles to

```js
  const element = React.createElement(
    "h1",
    null,
    "Hello"
  );
```

---
