 import React from 'react'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler = (e) => {
    e.preventDefault()
    const {firstName, lastName} = this.state
    alert(`${firstName} ${lastName}`)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>First Name</label>
          <input name='firstName' placeholder='First Name' onChange={this.changeHandler} />
        </div>
        <div>
          <label>Last Name</label>
          <input name='lastName' placeholder='Last Name' onChange={this.changeHandler} />
        </div>
        <button type='submit'>Signup</button>
      </form>
    )
  }
}


 function Events() {
   return (
     <div>
       <p>Implement a simple signup form with 2 input fields to enter first name and last name.</p>
       <p>Clicking on a submit button should show first name and last name in alert</p>
       <SignupForm />
       <hr />
     </div>
   )
 }

 export default Events
