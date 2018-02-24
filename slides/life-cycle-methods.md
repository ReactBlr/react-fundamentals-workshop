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
