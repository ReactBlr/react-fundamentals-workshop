### Rendering react app
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

---

### Functional components

```
function Greet(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Great name="John" />
```

---

### Class components

```
class Great extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

<Great name="John" />
```

---

### Composing Components
```
function AuthButton() {
  return (
    <div>
      <Button text="Login" />
      <Button text="Signup" />
    </div>
  )
}
```
