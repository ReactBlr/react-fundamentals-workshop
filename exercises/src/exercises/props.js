import React from 'react'

function FullName(props) {
  return null
}

function FruitList(props) {
  return null
}

function Button(props) {
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
      <p>Implement button that shows different background based on type props</p>
      <p>Green background for type = success</p>
      <Button type='success'>Success button</Button>
      <p>Red background for type = error</p>
      <Button type='error'>Success button</Button>
      <hr />
    </div>
  )
}

export default PropExamples
