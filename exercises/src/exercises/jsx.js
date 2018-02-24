import React from 'react'

function FullName() {
  const firstName = "John"
  const lastName = "Doe"
  return (
    <div>
      <p>Display full name</p>
      <p>Name: </p>
    </div>
  )
}


function FruitList() {
  const fruits = ["Apple", "Mango", "Grapes"]
  return (
    <div>
      <p>Display fruit list</p>
    </div>
  )
}

function Total() {
  const numbers = [10, 20, 30, 50]
  return (
    <div>
      <p>Display sum of numbers in an array</p>
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
