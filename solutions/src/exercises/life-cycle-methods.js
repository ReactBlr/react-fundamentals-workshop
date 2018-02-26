import React from 'react'

const sleep = (timeout) => new Promise(resolve => setTimeout(resolve, timeout))

class LifeCycleMethods extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: null
    }
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(res => sleep(4000).then(() => this.setState({posts: res})))
  }
  render() {
    const {posts} = this.state
    return (
      <div>
        {posts && posts.length
          ? posts.map(post => <div key={post.id} style={{
            margin: "10px"
          }}>{post.body}</div>)
          : "Loading..."
}
      </div>
    )
  }

}

export default LifeCycleMethods
