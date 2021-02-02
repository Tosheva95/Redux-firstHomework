import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

const Post = (props) => {
  const { post } = props
  const [bodyState, setBodyState] = useState()


  return <div>
    <div> <Button variant='link' onClick={() => setBodyState(`Body: ${props.post.body}`)}> 
    Title: </Button> {post.title} 
    </div>
    <h6 style = {{ color: 'rgb(57, 57, 233)', marginLeft: '10px'}}>{bodyState}</h6>
  </div>
}
export default Post