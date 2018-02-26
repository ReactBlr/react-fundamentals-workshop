import React from 'react'

class EcommerceApp extends React.component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {id: 1, name: 'Macbook'},
        {id: 2, name: 'CSS Secrets book'},
        {id: 3, name: 'Google Pixel 2'}
      ]
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
