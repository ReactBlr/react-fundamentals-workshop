import React from 'react'

function SimleButton() {
  return <button style={{backgroundColor: 'blue', color: 'white'}}>Simple button</button>
}

class AlertButton extends React.Component {
  showAlert() {
    alert('hello')
  }
  render() {
    return <button onClick={this.showAlert}>Alert Button</button>
  }
}

function BasicComponents() {
  return (
    <div>
      <p>Implement a basic button with blue background and white text</p>
      <SimleButton />
      <hr/>
      <p>Implement a button component with class syntax. Clicking on the button should show an alert with some text</p>
      <AlertButton />
      <hr />
    </div>
  )
}

export default BasicComponents
