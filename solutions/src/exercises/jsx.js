import React from 'react'

class ABC extends React.Component {
  render() {
    return (<div />)
  }
}

function FullName() {
  const firstName = "John"
  const lastName = "Doe"
  return (
    <div>
      <p>Display full name</p>
      <p>Name: {firstName} {lastName}</p>
    </div>
  )
}


function FruitList() {
  const fruits = ["Apple", "Mango", "Grapes"]
  const listItem = function(fruit, index) {
    return <li key={index}>{fruit}</li>
  }
  return (
    <div>
      <p>Display fruit list</p>
      <ul>
        {fruits.map(listItem)}
      </ul>
    </div>
  )
}

function Total() {
  const numbers = [10, 20, 30, 50]
  const total = numbers.reduce((acc, num) => {
    return acc + num
  }, 0)
  return (
    <div>
      <p>Display sum of numbers in an array</p>
      {total}
    </div>
  )

}

function JSXExercies() {
  return (
    <div>
      <FullName />
      <hr />
      <FruitList />
      <hr />
      <Total />
      <hr />
    </div>
  )
}

export default JSXExercies
