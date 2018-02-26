import React from 'react'

function FirstChild(props) {
  return (
    <div>{props.children[0]}</div>
  )
}

function List(props) {
  return (
    <div>
      {React.Children.map(props.children, (child, i) => [child, <hr />])}
    </div>
  )
}

function ChildrenExamples() {
  return (
    <div>
      <p>display only first child</p>
      <FirstChild>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </FirstChild>
      <hr />
      <p>display line break after every item in the list</p>
      <List>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
      </List>
    </div>
  )
}

export default ChildrenExamples
