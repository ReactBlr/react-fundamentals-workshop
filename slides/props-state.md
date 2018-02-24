### props
* props are read only

---

### state
* If you don’t use something in render(), it shouldn’t be in the state

---

### state
* State shouldn't be mutated directly
* Direct mutations doesn't trigger component re-render

```
  this.state.count = 0
```

---

### State
* Anything that can be computed should not be in state
```
// todos length should not be state
<div>Total Todos: {this.state.todos.length}</div>
```

---

### Asynchronous state updates
```
this.setState((prevState, props) => ({
  counter: prevState.counter + 1
}));
```

---

###  State
* State Updates are Merged
* State is not accessible to any component other than the one that owns and sets it.
* If something can be derived from either props or state, it probably shouldn’t be in the state.
* they change over time and can’t be computed from anything
* Using callbacks to update state in parent components
---

### Unidirectional data flow
* Data flows down. A component may choose to pass its state down as props to its child components

---

### state
```
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
  }
  increment() {
    this.setState((prevState, props) => {
      count: prevState.count + 1
    })
  }
  render() {
    <button onClick={this.increment}>Count: {this.state.count}</button>
  }
}
