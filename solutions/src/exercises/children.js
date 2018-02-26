import React from 'react'

function FirstChild(props) {
  return null
}

function List(props) {
  return null
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
      <hr />
    </div>
  )
}

export default ChildrenExamples
