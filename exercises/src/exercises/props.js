import React from 'react'

function FullName(props) {
  return null
}

function FruitList(props) {
  return null
}

function PropExamples() {
  return (
    <div>
      <p>Display full name</p>
      <FullName firstName="John" lastName="Doe" />
      <hr />
      <p>Display fruit list</p>
      <FruitList fruits={["Apple", "Mango", "Grapes"]} />
      <hr />
    </div>
  )
}

export default PropExamples
