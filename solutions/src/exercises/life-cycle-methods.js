import React from 'react'

class Posts extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then((res) => this.setState({posts: res}))
  }
  render() {
    const {posts} = this.state
    return (
      <div>
        {posts.map(post => <div key={post.id} style={{
          margin: "10px"
        }}>{post.body}</div>)}
      </div>
    )
  }

}

export function LifeCycleMethods() {
  return (
    <div>
      <p>Fetch posts from <a href="https://jsonplaceholder.typicode.com/posts">here</a> and render it</p>
      <Posts />
      <hr />
    </div>
  )
}

export default LifeCycleMethods
