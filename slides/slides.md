### React Fundamentals Workshop

Kiran Abburi

[@kiran_abburi](https://twitter.com/kiran_abburi)

---

### Setup

```shell
git clone https://github.com/ReactBangalore/react-fundamentals-workshop
cd exercises
npm install
npm start
```

---

### Create React App
* Starter kit for react
* Needn't worry about babel and webpack configuration

```shell
npm install -g create-react-app
create-react-app myapp
cd myapp
npm start
```

---

### React Hello world

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

---

### React Hello world

```js
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

```js
  <button disabled={submitting}>Submit</button>
```

---

### JSX Expressions
* Finds variables in the scope

```js
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

### Functional components

```
function Greet() {
  return <h1>Hello</h1>;
}

<Great />
```

---

### Class components

```
class Great extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

<Great />
```

---

### Components
* html tags start with lowercase
* React component names start with capital letter

```js
class Great extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

function App() {
  return (
    <div>
      <Great />
    </div>
  )
}
```

---

### props
* used to pass data or configuration to child components
* passed as attributes to tags
* props are readonly

```js
  <Name firstName="John" />
```

---

### props
```js
function Name(props) {
  return <h1>{props.firstName}</h1>
}

<Name firstName="John" />
```

---

### props
```js
class Name extends React.Component {
  render() {
    return <h1>{this.props.firstName}</h1>
  }
}

<Name firstName="John" />
```

---

### props
* props are read only
* can be passed further down the component tree

```js
function Name(props) {
  return <FirstName firstName={props.firstName} />
}

<Name firstName="John" />
```

---

### state
* React state is used to store UI state of the app
* state change over time and can’t be computed from anything
* Some example for state
   * data fetched from server
   * data entered into forms
   * modal open state

---

### state

```
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 5
    }
    this.reset = this.reset.bind(this)
  }
  reset() {
    this.setState({
      count: 0
    })
  }
  render() {
    <div>
      Count: {this.state.count}
      <button onClick={this.increment}>Reset</button>
    </div>
  }
}
```

---

### state
* Changes in state trigger re-render of app
* Need to use this.setState to update state
* Need to use class syntax for components with state

```js
  this.setState({count: 0})
```

---

### state
* State shouldn't be mutated directly
* Direct mutations doesn't trigger component re-render

```
  this.state.count = 0
```

---

### State
* State should be minimal
* Anything that can be computed should not be in state

```js
// todos length should not be state
<div>Total Todos: {this.state.todos.length}</div>
```

---

### State
* State Updates are Merged

```js
  class LoginForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        firstName: '',
        lastName: ''
      }
    }
    setFirstName(firstName) {
      this.setState({
        firstName
      })
    }
  }
```

---

### Asynchronous state updates
```
this.setState((prevState, props) => ({
  counter: prevState.counter + 1
}));
```

---

### Unidirectional data flow
* Data flows from parent components to child components
* Should use callbacks to update state in parent components
* State should be stored atleast one level above the components that use it
* State should be single source of truth

---

### Life cycle method
* We need to update time every second
* What is the best place to write this logic ?
```
class Timer extends React.component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return <div>Time: {this.state.date} />
  }
}
```

---

### Life cycle method

```
class Timer extends React.component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({date: new Date()}),
      1000
    )
  }
  render() {
    return <div>Time: {this.state.date} />
  }
}
```

---

### Life cycle method

```
class Timer extends React.component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({date: new Date()}),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div>Time: {this.state.date} />
  }
}
```

---

###  Lifecycle methods
* 3 Stages of component
  * component mounting
  * re-render or update when props or state change
  * component unmounting

---

###  Lifecycle methods
* component mounting
  * constructor
  * componentWillMount()
  * render() // with initial state and props
  * componentDidMount()

---

###  Lifecycle methods
* component updating
  * componentWillReceiveProps(nextProps)
  * shouldComponentUpdate(nextProps, nextState)
  * componentWillUpdate(nextProps, nextState)
  * render()
  * componentDidUpdate(prevProps, prevState)

---

### Lifecycle methods
* component unmounting
  * componentWillUnmount()

---

### componentWillMount
* Invoked once before the initial rendering occurs

---

### componentDidMount
* Invoked once after the initial rendering occurs
* you can access any refs to your children
* Usecases
  * Integrate with other JavaScript frameworks
  * Set timers using setTimeout or setInterval
  * Make AJAX calls

---

### componentWillReceiveProps
* Invoked when a component is receiving new props
* Usefull for reacting to a prop transition before render()

```
componentWillReceiveProps: function(nextProps) {
    this.setState({
      likesIncreasing: nextProps.likeCount > this.props.likeCount
    });
}
```

---

### shouldComponentUpdate
* Invoked before rendering when new props or state are being received
* prevents re-render if shouldComponentUpdate returns false
* Useful for performance optimizations
```
shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.id !== this.props.id;
}
```

---

### componentWillUpdate
* Invoked before rendering when new props or state are being received
* Useful to perform preparation before an update occurs
* You cannot use this.setState() in this method

---

### componentDidUpdate
* Invoked after the component's updates are flushed to the DOM
* Should be carefull if you use this.setState in this method. It could lead to infinite loop

---

### componentWillUnmount
* Invoked before a component is unmounted from the DOM
* Usecases
  * cleaning up any DOM elements created
  * invalidating timers

---
