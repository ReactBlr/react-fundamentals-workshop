import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState((prevState) => ({
      flag: !prevState.flag
    }))
  }
  render() {
    return <button onClick={this.toggle} style={{fontSize: '20px', padding: '10px'}}>{this.state.flag ? 'Yes' : 'No'}</button>
  }
}


function StateExamples() {
  return (
    <div>
      <p>Build a toggle button which toggles between Yes/No</p>
      <Toggle />
      <hr />
    </div>
  )
}

export default StateExamples
