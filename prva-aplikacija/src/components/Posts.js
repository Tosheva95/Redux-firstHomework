import React, { useEffect, useState } from 'react'
import Post from './Post.js'
 
const Posts = () => {
  const [postList, setPostList] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const htmlList = data.map((post, i) => <Post key={i} post={post} />)
        setPostList(htmlList)
  })
}, [])

return <div>
  {!postList ? <div>loading...</div> : <div>{postList}</div>}

</div>
}

export default Posts