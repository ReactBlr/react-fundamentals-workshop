import React from 'react'

function FullName({firstName, lastName}) {
  return <div>{firstName} {lastName}</div>
}

function FruitList(props) {
  return (
    <ul>
      {props.fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
  )
}

function Button(props) {
  return (
    <button style={
      {backgroundColor: props.type === 'success' ? 'green' : 'red'}
    }>
      {props.children}
    </button>
  )
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
